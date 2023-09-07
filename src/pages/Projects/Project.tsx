import React from 'react';
import {ProjectsList} from "@/pages/api/list";

interface Props extends ProjectsList {
}

const Project = ({title, description, tags, repoLink, demoLink}: Props) => {
    return (
        <div className="w-10/12 rounded overflow-hidden shadow-lg mx-auto my-2">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
                <div className="px-6 pt-4 pb-2 flex justify-between">
                    <div>
                        {
                            tags ? tags.length > 0 ? tags.map(tag => <span
                                key={tag + "_tags"}
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 lowercase">#{tag}</span>) : null : null
                        }
                    </div>
                    <div>
                        {repoLink ? <span className="inline-block"><a href={repoLink} target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 24 24"
                             className="ml-2 -mr-1 w-6 h-6 hover:fill-current hover:text-blue-700"
                             fill="currentColor">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                    </a></span> : null}
                        {demoLink ? <span className="inline-block"><a href={demoLink} target="_blank">
                        <svg fill="currentColor"
                             xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 52 52"
                             className="ml-2 -mr-1 w-6 h-6 hover:fill-current hover:text-blue-700">
                        <g>
                        	<path d="M51.8,25.1C47.1,15.6,37.3,9,26,9S4.9,15.6,0.2,25.1c-0.3,0.6-0.3,1.3,0,1.8C4.9,36.4,14.7,43,26,43
                        		s21.1-6.6,25.8-16.1C52.1,26.3,52.1,25.7,51.8,25.1z M26,37c-6.1,0-11-4.9-11-11s4.9-11,11-11s11,4.9,11,11S32.1,37,26,37z"/>
                        	<path d="M26,19c-3.9,0-7,3.1-7,7s3.1,7,7,7s7-3.1,7-7S29.9,19,26,19z"/>
                        </g>
                        </svg>
                    </a></span> : null}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Project;