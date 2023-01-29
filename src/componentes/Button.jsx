import '../componentes/Button.css'

function Button ({onClickFn, value}) {
    return(
      <button className="button__theme" onClick={onClickFn}>{value}</button>
    );
}

export default Button;