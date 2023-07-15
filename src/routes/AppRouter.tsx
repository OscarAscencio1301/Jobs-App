import { Route, Routes } from "react-router-dom"
import { JobsView } from "../views/jobs/JobsView"
import { FavoriteJobsView } from "../views/jobs/FavoriteJobsView"
import { SelectedJobsView } from "../views/jobs/SelectedJobsView"
import { Navbar } from "../components/navbar/Navbar"


export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<JobsView />} />
                <Route path="/favorites" element={<FavoriteJobsView />} />
                <Route path="/selected" element={<SelectedJobsView />} />
            </Routes>
        </>
    )
}
