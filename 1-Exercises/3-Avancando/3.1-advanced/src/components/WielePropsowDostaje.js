const WielePropsowDostaje = ({dlon, bron, piers}) => {
    return(<div>
        <h2>Sprzęt Żolnierza</h2>
        <ul>
            <li>W dłoniach: {dlon}</li>
            <li>Na broń: {bron}</li>
            <li>W piersiach: {piers}</li>
        </ul>
    </div>);
};

export default WielePropsowDostaje;