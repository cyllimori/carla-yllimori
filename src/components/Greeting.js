export default function  Container ({title, subtitle}){
    return(
        <div className="content-container">
            <div className="title">
                <h1>{title}</h1>
            </div>
            <div className="subtitle">
                <p>{subtitle}</p>
            </div>
        </div>
    );
}