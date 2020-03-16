import React, { useState, useEffect } from 'react';
import {withRouter} from 'react-router-dom';

let setRedirectLink: any;
const Redirector: React.FC = (props) => {
    const [redirectLink, setRedirect] = useState(null);
    useEffect(() => {
        function redirect() {
            if (redirectLink === "/") {
                // @ts-ignore
                props.history.push("/")
            } else if (redirectLink !== "" && redirectLink !== null) {
                // @ts-ignore
                props.history.replace(redirectLink);
            }
        }
        redirect();
        // @ts-ignore
    }, [redirectLink, props.history])
    setRedirectLink = setRedirect;
    return (
        <>
        </>
    )
}

export function redirectUrl(url: string) {
    if (setRedirectLink) {
        setRedirectLink(url);
    }
}

export default withRouter(Redirector);