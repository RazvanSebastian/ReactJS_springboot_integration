import React from 'react'

function ErrorTester() {
    return (
        <div>
            <ErrorBoundary>
                <ButtonErrorSimulator />
            </ErrorBoundary>
        </div>
    )
}

class ButtonErrorSimulator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            hasError: true
        })
    }

    render() {
        console.log("Render twice")
        if (this.state.hasError) {
            throw new Error("Error!!!")
        }
        return (
            <div>
                <h3>Everything works...</h3>
                <p>
                    state = {this.state.hasError ? 'true' : 'false'}
                </p>
                <button onClick={this.handleClick}>Simulate error </button>
            </div>
        )
    }
}

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null,
            hasError: false
        };
    }

    componentDidCatch(error, errorInfo) {
        console.log("componentDidCatch")
        // Catch errors in any components below and re-render with error message
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
        // You can also log error messages to an error reporting service here
        console.log(
            {
                "error": error,
                "error-info": errorInfo
            })
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        console.log("getDerivedStateFromError")
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h1>Something went wrong</h1>
                </div>
            )
        }
        return this.props.children;
    }
}

export default ErrorTester;