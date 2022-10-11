const { GoogleAuth } = require("google-auth-library");
const { google } = require("googleapis");

export const InitApp = () => {
  return new Promise((resolve, reject) => {
    try {
      // Auth
      const auth = new GoogleAuth({
        scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
        // keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
      });

      const service = google.sheets({ version: "v4", auth });

      resolve(service);
    } catch (error) {
      reject(error);
    }
  });
};

export const getEntry = (service, range) => {
  return new Promise((resolve, reject) => {
    try {
      const response = service.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID,
        range,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
