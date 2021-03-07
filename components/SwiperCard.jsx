const SwiperCard = ({ value, color }) => {
	return (
		<>
			<div style={{backgroundColor: color}} className="card">{value}</div>
			<style jsx>{`
            .card {
               height: 500px;
               text-align: center;
               line-height: 100px;
               border: 1px solid rgba(0, 0, 0, 0.12);
               font-weight: 600;
               font-size: 30px;
               letter-spacing: 10
            }
         `}</style>
		</>
	);
};

export default SwiperCard;
