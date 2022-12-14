import { Project } from "./project"

class StorageApi {    
    public static storeProject(project: Project) {
        localStorage.setItem(project.getName(), JSON.stringify(project));
    }

    public static getProject() {
        if (localStorage.getItem("New Project") === null) {
            return Project.DefaultProject();
        }

        return JSON.parse(localStorage.getItem("New Project") || "") as Project;
    }
}

export default StorageApi