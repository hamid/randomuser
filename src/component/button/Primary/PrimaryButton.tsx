import type PrimaryButtonProps from "./PrimaryButton.type";
import './PrimaryButton.style.scss'

const PrimaryButton = (props: PrimaryButtonProps)=>{

    let label = props.label;
    let onClick = props.onClick;
    let disable = props.disable ?? false;
    let loading = props.loading;

    return(
        <button
            className="primary-button"
            onClick={onClick}
            disabled={disable}
        >
            {loading ? "loading ..." : label}
        </button>
    )
}

export default PrimaryButton;