import { useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount, decrementByAmount } from "../stores/counter";

export default function CounterActions() {

    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(decrementByAmount(5))}>5 Azalt</button>
            <button onClick={() => dispatch(decrement())}>Azalt (-)</button>
            <button onClick={() => dispatch(increment())}>Artır (+)</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>5 Artır</button>
        </div>
    );
}
