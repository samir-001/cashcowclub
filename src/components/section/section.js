import "./section.css"
const Section = (props)=>(
    <section className="section">
        <div className="container">
            <div className="section-content">
                <h1 className="section-head"> {props.head}</h1>
                <div className={"section-details"+" "+props.direction}>
                    <div className="sction-data">
                       {props.children}
                    </div>
                    <div className="setion-img">
                        <img src={props.image}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
export default Section