import Layout from "../components/Layout";
import ContentSwiper from "../components/ContentSwiper";

export default function Home() {
	return (
		<>
			<Layout>
				<main>
					<div className="space-y-60" />
					<ContentSwiper />
				</main>
			</Layout>
			<style jsx>{`
				.space-y-60 {
					height: 60px;
				}
			`}</style>
		</>
	);
}
