type GoogleCodeResponse = {
	code?: string;
	error?: string;
};

type GoogleCodeClient = {
	requestCode: () => void;
};

type GoogleCodeClientConfig = {
	client_id: string;
	scope: string;
	ux_mode: "popup";
	callback: (response: GoogleCodeResponse) => void;
	error_callback?: (error: unknown) => void;
};

type GoogleIdentityServices = {
	accounts: {
		oauth2: {
			initCodeClient: (config: GoogleCodeClientConfig) => GoogleCodeClient;
		};
	};
};

declare global {
	interface Window {
		google?: GoogleIdentityServices;
	}
}

const googleScriptSrc = "https://accounts.google.com/gsi/client";

export const loadGoogleIdentityScript = () => {
	if (window.google?.accounts?.oauth2) {
		return Promise.resolve();
	}

	const existingScript = document.querySelector<HTMLScriptElement>(
		`script[src="${googleScriptSrc}"]`
	);

	if (existingScript) {
		if (existingScript.dataset.loaded === "true") {
			return Promise.resolve();
		}

		return new Promise<void>((resolve, reject) => {
			existingScript.addEventListener("load", () => resolve(), { once: true });
			existingScript.addEventListener(
				"error",
				() => reject(new Error("Google authentication failed to load.")),
				{ once: true }
			);
		});
	}

	return new Promise<void>((resolve, reject) => {
		const script = document.createElement("script");
		script.src = googleScriptSrc;
		script.async = true;
		script.defer = true;
		script.onload = () => {
			script.dataset.loaded = "true";
			resolve();
		};
		script.onerror = () =>
			reject(new Error("Google authentication failed to load."));
		document.head.appendChild(script);
	});
};

export const requestGoogleAuthCode = async () => {
	const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

	if (!clientId) {
		throw new Error("Missing VITE_GOOGLE_CLIENT_ID in your environment.");
	}

	await loadGoogleIdentityScript();

	if (!window.google?.accounts?.oauth2) {
		throw new Error("Google authentication is unavailable.");
	}

	return new Promise<string>((resolve, reject) => {
		const client = window.google.accounts.oauth2.initCodeClient({
			client_id: clientId,
			scope: "openid email profile",
			ux_mode: "popup",
			callback: (response) => {
				if (response.code) {
					resolve(response.code);
					return;
				}

				reject(new Error(response.error || "Google authentication failed."));
			},
			error_callback: () => {
				reject(new Error("Google authentication was cancelled or failed."));
			},
		});

		client.requestCode();
	});
};
