import { HomePageContainer } from "@/container/home-page-container"
import { HomepageContextProvider } from "@/container/home-page-container/useHomepage"

function HomePage() {
  return (
    <HomepageContextProvider>
      <HomePageContainer />
    </HomepageContextProvider>
  )
}

export default HomePage
