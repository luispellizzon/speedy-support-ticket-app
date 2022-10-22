import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTicket, reset } from "../features/ticket/ticketSlice";
import { toast } from "react-toastify";

function Ticket() {
	const dispatch = useDispatch();
	const params = useParams();
	const { ticket, isError, isSuccess } = useSelector((state) => state.ticket);

	useEffect(() => {
		dispatch(getTicket(params.ticketId));
	}, [dispatch]);

	return (
		<div className="div">
			<h1>Ticket {ticket.description}</h1>
		</div>
	);
}

export default Ticket;
