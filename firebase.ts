import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANd4yZT54bSK0AcbItj1bqB7q5x78fOT0",
@@ -10,3 +11,5 @@ const firebaseConfig = {
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);