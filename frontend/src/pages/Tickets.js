import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTickets, reset } from "../features/ticket/ticketSlice";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import TicketItem from "../components/TicketItem";

function Tickets() {
	const { tickets, isLoading, isSuccess, isError } = useSelector((state) => state.ticket);

	const dispatch = useDispatch();

	/* -- Set isSuccess to false when component unMount */
	useEffect(() => {
		return () => {
			if (isSuccess) {
				dispatch(reset());
			}
		};
	}, [dispatch, isSuccess]);

	useEffect(() => {
		dispatch(getTickets());
		//
		dispatch(reset());
	}, [dispatch]);

	if (isLoading) {
		return <Spinner />;
	}
	return (
		<>
			<BackButton url="/" />
			<h1>Tickets</h1>
			<div className="tickets">
				<div className="ticket-headings">
					<div>Date</div>
					<div>Product</div>
					<div>Status</div>
					<div></div>
				</div>
				{tickets.map((ticket) => (
					<TicketItem key={ticket._id} ticket={ticket} />
				))}
			</div>
		</>
	);
}

export default Tickets;
