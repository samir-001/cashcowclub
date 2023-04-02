import './footer.css'
const Footer = ()=>(
    <div className="footer">

            <div className="footer-content">
                <div className="footer-section">
                    <h3> contact</h3>
                    <ul>
                     <li>- phone:+20106666666</li>
                     <li>- email: demo@ccc.org</li>
                     <li>
                        <form>
                            <label htmlFor='message'>- leave message</label>
                            <textarea id="message" name="message" rows="4" ></textarea>
                            <input type="button" value="send"/>
                        </form>
                     </li>
                    </ul>   
                </div>
                <div className="footer-section">
                        <h3> products </h3>
                        <ul>
                            <li>
                                - conslting
                            </li>
                            <li>
                                - web dev.
                            </li>
                            <li>
                                - e-learning
                            </li>
                        </ul>
                </div>
                <div className="footer-section temp">
                        <h3> our clients </h3>
                        <ul>
                            <li>
                                - client 1 
                            </li>
                            <li>
                                - client 2 
                            </li>
                            <li>
                                - client 3

                            </li>
                        </ul>
                </div>
            </div>

    </div>
)
export default Footer