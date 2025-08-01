import AuthLayout from "../components/AuthLayout";
import LoginForm from "../components/Login";

export default function LoginPage() {
    return(
        <AuthLayout
        title="Welcome Back"
        subtitle="Sign to your Account to continue your job search or post jobs"
        footerLink="/register"
        footerText="Don't have an account"
        footerLinkText="Sign Up"
        >
            <LoginForm/>
        </AuthLayout>
    )
}