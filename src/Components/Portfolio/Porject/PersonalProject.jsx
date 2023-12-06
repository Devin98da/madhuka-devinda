import React, { Fragment } from 'react'
import classes from './Project.module.css';
import { useParams } from 'react-router-dom';
import { ProjectsData } from '../../ProjectsData';
import Biscuits from '../../../Assets/biscuits.jpg';
import Footer from '../../Footer/footer';

const PersonalProject = () => {
    const params = useParams();

    const project = ProjectsData.find(p => p.title === params.projectId);

    if (!project) {
        return <p>No project!</p>
    }

    const listMaker = (obj) => {
        return (
            <ul className={classes.detailBlockUl}>
                {Object.keys(obj).map((key) => {
                    return <li key={key} className={classes.entry}>{obj[key]}</li>
                })}
            </ul>
        )
    }

    const checkDataIsEmpty = (str) => str.trim() === ' ';

    const hasDandA = checkDataIsEmpty(project.design_analyse_doc);


    const project_goals = listMaker(project.project_design_goals);
    const level_design_building = listMaker(project.detailed_info.level_design_building);
    const combat = listMaker(project.detailed_info.combat);
    const story_dialog = listMaker(project.detailed_info.story_dialog);
    const drametic_moments = listMaker(project.detailed_info.dramatic_moments);
    const scripting = listMaker(project.detailed_info.scripting);
    const playtest_iteration = listMaker(project.detailed_info.playtesting_iteration);

    return (
        <section>
            <div className={`container personal__container}`}>
                <h2 className={classes.title}>{project.title}</h2>
                <center>
                    <div className={classes.project__image}>
                        <div className={classes.image__container}>
                            <div>
                                <img src={Biscuits} />
                            </div>
                            <div>
                                {/* images slide */}
                            </div>
                        </div>
                    </div>
                </center>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <p>
                                    <strong className={classes.greenEntry}>Platform:</strong>
                                    <br></br>
                                    <span className={classes.entry}>{project.platform}</span>
                                    <br></br>
                                </p>
                                <p>
                                    <strong className={classes.greenEntry}>Engine:</strong>
                                    <br></br>
                                    <span className={classes.entry}>{project.engine}</span>
                                    <br></br>
                                </p>
                                <p>
                                    <strong className={classes.greenEntry}>Language:</strong>
                                    <br></br>
                                    <span className={classes.entry}>{project.language}</span>
                                    <br></br>
                                </p>
                                <p>
                                    <strong className={classes.greenEntry}>Tool Used:</strong>
                                    <br></br>
                                    <span className={classes.entry}>{project.tool_used}</span>
                                    <br></br>
                                </p>
                                <p>
                                    <strong className={classes.greenEntry}>Duratoin:</strong>
                                    <br></br>
                                    <span className={classes.entry}>{project.duration}</span>
                                    <br></br>
                                </p>
                                <p>
                                    <strong className={classes.greenEntry}>Completion:</strong>
                                    <br></br>
                                    <span className={classes.entry}>{project.completoin}</span>
                                    <br></br>
                                </p>
                                <p>
                                    <strong className={classes.greenEntry}>Team Size:</strong>
                                    <br></br>
                                    <span className={classes.entry}>{project.team_size}</span>
                                    <br></br>
                                </p>
                                <p>
                                    <strong className={classes.greenEntry}>Role:</strong>
                                    <br></br>
                                    <span className={classes.entry}>
                                        {/* Story writing, level design,
                                        <br></br>
                                        game design, all gameplay scripting,
                                        <br></br>
                                        voice overs, enemy AI */}
                                        {project.role}
                                    </span>
                                    <br></br>
                                </p>

                            </td>
                            <td>
                                <p>
                                    {/* <h2 className={classes.greenEntry}>Overview</h2> */}
                                    <strong className={classes.greenEntry}>Overview</strong>

                                    <p>{
                                        Object.keys(project.overview).map((key) => {
                                            return <p key={key} className={classes.entry}>{project.overview[key]}</p>
                                        })
                                    }
                                    </p>
                                </p>
                                <p>
                                    <strong className={classes.greenEntry}>Project Design Goals</strong>
                                    {project_goals}
                                </p>
                                <p>
                                    <strong className={classes.greenEntry}>Download Biscuits:</strong>
                                    <a href={project.demo} target='_blank'> Download</a>
                                </p>
                                {hasDandA && <p><strong className={classes.greenEntry}>Design & Anlyse Document: </strong></p>}

                            </td>
                        </tr>
                    </tbody>
                </table>
                <hr></hr>
                <div className={classes.info_content}>
                    <p>
                        <strong className={classes.greenEntry}>Game trailor</strong>
                        <br></br>
                        <iframe src={project.trailer} frameborder="0" allowFullScreen></iframe>
                    </p>
                </div>

                <hr></hr>
                {/* <div className={classes.info_content}>
                    <p>
                        <strong className={classes.greenEntry}>Detailed Info</strong>
                        <p className={classes.entry}>
                            {project.detailed_info.info[1]}
                        </p>
                        <p className={classes.entry}>
                            {project.detailed_info.info[2]}
                        </p>
                    </p>
                </div>
                <hr></hr>
                <div className={classes.info_content}>
                    <p>
                        <span>
                            <strong className={classes.greenEntry}>Level Map</strong>
                        </span>
                    </p>
                    <h2>
                        <img src={project.detailed_info.level_map.img} />
                    </h2>
                </div>
                <hr></hr>
                <div className={classes.info_content}>
                    <p className={classes.greenEntry}>
                        <span>
                            <strong className={classes.greenEntry}>Level Details</strong>
                        </span>
                    </p>
                    <p className={classes.entry}>
                        {project.detailed_info.Level_details[1]}
                    </p>
                    <br></br>
                    <p className={classes.entry}> 
                        {project.detailed_info.Level_details[2]}
                    </p>
                    <br></br>
                    <p className={classes.entry}>
                        {project.detailed_info.Level_details[3]}
                    </p>
                    <br></br>
                    <p className={classes.entry}>
                        {project.detailed_info.Level_details[4]}
                    </p>
                    <br></br>
                    <p className={classes.entry}>
                        {project.detailed_info.Level_details[5]}
                    </p>
                    <br></br>
                    <p className={classes.entry}>
                        {project.detailed_info.Level_details[6]}
                    </p>
                    <br></br>
                    <p className={classes.entry}>
                        {project.detailed_info.Level_details[7]}
                    </p>
                </div> */}
                <hr></hr>
                <div className={classes.info_content}>
                    <p className={classes.greenEntry}>
                        <span>
                            <strong>Level Design & Building</strong>
                        </span>
                    </p>
                    {level_design_building}
                </div>
                {/* COMBAT */}
                <div className={classes.info_content}>
                    <p className={classes.greenEntry}>
                        <span>
                            <strong>Combat</strong>
                        </span>
                    </p>
                    {combat}
                </div>
                {/* STORY & DIALOG */}
                <div className={classes.info_content}>
                    <p className={classes.greenEntry}>
                        <span>
                            <strong>Story & Dialog</strong>
                        </span>
                    </p>
                    {story_dialog}
                </div>

                {/* DRAMETIC MOMENTS*/}
                <div className={classes.info_content}>
                    <p className={classes.greenEntry}>
                        <span>
                            <strong>Dramatic Moments</strong>
                        </span>
                    </p>
                    {drametic_moments}
                </div>
                {/* SCRIPTING*/}
                <div className={classes.info_content}>
                    <p className={classes.greenEntry}>
                        <span>
                            <strong>Scripting</strong>
                        </span>
                    </p>
                    {scripting}
                </div>
                {/* PLAY TESTING AND ITERATION */}
                <div className={classes.info_content}>
                    <p className={classes.greenEntry}>
                        <span>
                            <strong>Playtesting & Iteration</strong>
                        </span>
                    </p>
                    {playtest_iteration}
                </div>
            </div>
            <Footer />
        </section>

    )
}

export default PersonalProject