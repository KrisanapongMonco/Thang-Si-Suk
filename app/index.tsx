import { Redirect } from "expo-router";

// Redirect to the Login page when the app starts
export default function Index() {
  return <Redirect href="/pages/Login" />;
}
