import styles from "./LoginPage.module.scss";
import { useForm } from "react-hook-form";

export const LoginPage = () => {
	const { register, handleSubmit } = useForm({ defaultValues: { email: "", password: "" } });

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.form_welcome}>Welcome to Dev-Project</div>
			<div className={styles.form_text}>Please sing-in to your account and start the adventure</div>

			<label>Email</label>
			<input {...register("email")} type="email" placeholder="Enter your email or username" />
			<label>Password</label>
			<input {...register("password")} type="password" placeholder="Enter your password" />

			<button type="submit">Login</button>
			<div>
				New on our platform? <a href="#">Create an account</a>
			</div>
		</form>
	);
};
