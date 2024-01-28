import React from "react";

function Header(){

    const scrollToAboutSection = () => {
        const element = document.getElementById('about');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const scrollToJavaScriptProjectSection = () => {
        const element = document.getElementById('JavaScriptProjects');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const scrollToUnityProjectSection = () => {
        const element = document.getElementById('UnityProjects');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const scrollContactsSection = () => {
        const element = document.getElementById('Contacts');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return(
        <header>
            <h3 className="Title">Francesco</h3>
            <div className="Link-Holder">
                <h4 className="Header-Links" onClick={scrollToAboutSection} >About</h4>
                <h4 className="Header-Links" onClick={scrollToJavaScriptProjectSection} >JavaScript Projects</h4>
                <h4 className="Header-Links" onClick={scrollToUnityProjectSection} >Unity Projects</h4>
                <h4 className="Header-Links" onClick={scrollContactsSection}>Contacts</h4>
            </div>
        </header>
    );
}

export default Header;