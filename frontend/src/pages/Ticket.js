import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTicket, reset } from "../features/ticket/ticketSlice";
import { toast } from "react-toastify";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

function Ticket() {
	const dispatch = useDispatch();
	const params = useParams();
	const { ticket, isError, message, isLoading } = useSelector((state) => state.ticket);

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}
		dispatch(getTicket(params.ticketId));
		dispatch(reset());
	}, [params.ticketId]);

	if (isLoading) {
		return <Spinner />;
	}
	if (isError) {
		return <h2>Sorry, but something went wrong. Our team is working on the problem!</h2>;
	}
	return (
		<div className="ticket-page">
			<header className="ticket-header">
				<BackButton url="/tickets" />
				<h2>
					Ticket ID: {ticket._id}
					<span className={`status status-${ticket.status}`}>{ticket.status}</span>
				</h2>
				<h3>Date Submitted: {new Date(ticket.createdAt).toLocaleString("en-IE")}</h3>
				<hr />
				<div className="ticket-desc">
					<h3>Issue Description:</h3>
					<p>{ticket.description}</p>
				</div>
			</header>
		</div>
	);
}

export default Ticket;
