import React from 'react';

// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with "light" as the default).
const ThemeContext = React.createContext('red');

class ContextDemo extends React.Component {
    render() {
        const theme = {

        }
        return (
            <ThemeContext.Provider value={{
                color: 'green',
                font: 'bold',
                text: 'Bla bla'
            }}>
                <Toolbar />
            </ThemeContext.Provider >
        );
    }
}

function Toolbar() {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

class ThemedButton extends React.Component {
    static contextType = ThemeContext;
    render() {
        // console.log(contextType)
        return <Button theme={this.context} />;
    }
}

function Button(props) {
    return (
        <button style={{ color: props.theme.color, fontWeight: props.theme.font }} onClick={() => window.alert("Click")} >{props.theme.text}</button>
    )
}



export default ContextDemo