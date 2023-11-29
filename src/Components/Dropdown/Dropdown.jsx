import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Dropdown.module.css';

const Dropdown = (props) => {

    const dropdowns = props.projects.map((p) => {
        return (
            <ul>
                <Link key={p.id} to={`/madhuka-devinda/projects/${p.title}`} target='blank'>{p.title}</Link>
            </ul>
        )
    })

    return (
        <div>
            {dropdowns}

        </div>
    )
}

export default Dropdown