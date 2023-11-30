import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Dropdown.module.css';

const Dropdown = (props) => {

    const dropdowns = props.projects.map((p) => {
        return (
            <ul key={p.id}>
                <Link key={p.id} to={`/projects/${p.title}`}>{p.title}</Link>
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