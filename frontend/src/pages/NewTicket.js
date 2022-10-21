import { useState } from "react";
import { useSelector } from "react-redux";

function NewTicket() {
	const { user } = useSelector((state) => state.auth);
	const [name] = useState(user.name);
	const [email] = useState(user.email);
	const [product, setProduct] = useState("Iphone");
	const [description, setDescription] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<section className="heading">
				<h1>Create new Ticket</h1>
				<p>Fill out the form below with the informations required</p>
			</section>
			<section className="form">
				<div className="form-group">
					<label htmlFor="name">Your Name</label>
					<input type="text" value={name} className="form-control" disabled />
				</div>
				<div className="form-group">
					<label htmlFor="name">Your Email</label>
					<input type="text" value={email} className="form-control" disabled />
				</div>
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="product">Product</label>
						<select
							name="product"
							id="product"
							value={product}
							onChange={(e) => setProduct(e.target.value)}
						>
							<option value="Iphone">Iphone</option>
							<option value="MacBook">MacBook</option>
							<option value="Ipad">Ipad</option>
							<option value="AirPods">AirPods</option>
							<option value="Apple Watch">Apple Watch</option>
							<option value="AirTags">AirTags</option>
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="description">Describe the product issue</label>
						<textarea
							name="description"
							id="description"
							className="form-control"
							placeholder="Description..."
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						></textarea>
					</div>
					<div className="form-group">
						<button type="submit" className="btn btn-block">
							Submit
						</button>
					</div>
				</form>
			</section>
		</>
	);
}

export default NewTicket;
