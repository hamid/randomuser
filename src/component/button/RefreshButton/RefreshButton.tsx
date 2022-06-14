import PrimaryButton           from "../Primary/PrimaryButton";
import './RefreshButton.style.scss'
import type RefreshButtonProps from "./RefreshButton.type";

const RefreshButton = (props: RefreshButtonProps)=>{

    let label = props.label;
    let onClick = props.onClick;
    let disable = props.disable ?? false;
    let loading = props.loading;

    return(
        <section className="refresh-button">
            <PrimaryButton
                label={label}
                onClick={onClick}
                disable={disable}
                loading={loading}
            />
        </section>
    )
}

export default RefreshButton;