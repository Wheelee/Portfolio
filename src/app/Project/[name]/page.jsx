import { getProject } from "@/functions/inter";

export default function index({params}){
    const projectName = decodeURI(params.name);
    const projects = getProject();
    const actualProject = projects.find((project) => project.title === projectName)


    return(
        <div>
            {actualProject ? JSON.stringify(actualProject) : "Project non" }
        </div>
    )
}