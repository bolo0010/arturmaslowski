import React, {useState, useEffect} from 'react';
import Project from "@/pages/Projects/Project";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {ProjectsList} from "@/pages/api/list";
import '@/styles/projects.module.css'

interface Props {
    setState: (state: boolean) => void
}

const Projects = ({setState}: Props) => {
    const [list, setList] = useState<Array<ProjectsList>>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        getList();
    }, [])

    const getList = async () => {
        setLoading(true);
        try {
            const response = await fetch("/api/projects", {method: "GET",});
            const data = await response.json();
            setList(data);
        } catch (err) {
            console.error(err);
        }
        setLoading(false);
    }

    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-full my-6 mx-auto max-w-3xl">
                    <div
                        className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div
                            className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                                Projekty
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setState(false)}
                            >
                    <span
                        className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                            </button>
                        </div>
                        <div className='splide-container'>
                            <div className="rounded-lg text-center">
                                {
                                    loading ? (
                                            <div
                                                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-blue-800 motion-reduce:animate-[spin_1.5s_linear_infinite] text-center"
                                                role="status">
                                                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                                >Ładowanie zawartości...</span>
                                            </div>
                                        ) :
                                        <Splide aria-label="Projects">
                                            {

                                                list.length > 0 ? list.map(project =>
                                                    <SplideSlide key={project.title + '_splide'}>
                                                        <Project title={project.title}
                                                                 description={project.description}
                                                                 tags={project.tags}
                                                                 demoLink={project.demoLink}
                                                                 repoLink={project.repoLink}/>
                                                    </SplideSlide>
                                                ) : null
                                            }
                                        </Splide>
                                }
                            </div>
                        </div>
                        <div
                            className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                                className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 text-white font-bold uppercase text-sm px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 "
                                type="button"
                                onClick={() => setState(false)}
                            >
                                Zamknij
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}

export default Projects;