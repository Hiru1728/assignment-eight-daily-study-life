import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question'>
            <h1>How does react work?</h1>
            <hr />
            <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug.
                A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. </p>
            <h1>Difference between Props and State?</h1>
            <hr />
            <h4>Props</h4>

            <p>The Data is passed from one component to another. It is Immutable (cannot be modified). Props can be used with state and functional components.Props are read-only.
            </p>
            <h4>STATE</h4>
            <p>The Data is passed within the component only. It is Mutable ( can be modified). State can be used only with the state components/class component. State is both read and write.</p>

            <h1>useEffect is used for other purposes than data load</h1>
            <hr />
            <p>The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, setting up subscriptions or timers, etc can be lead to unwarranted side-effects. Since the render method is to quick to produce a side-effect one needs to use life cycle methods to observe the side effects. </p>
        </div >
    );
};

export default Question;