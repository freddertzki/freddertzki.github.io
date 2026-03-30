import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { SchedulePage } from "./pages/SchedulePage";
import { ToursCatalogPage } from "./pages/ToursCatalogPage";
import { TourDetailPage } from "./pages/TourDetailPage";
import { AboutPage } from "./pages/AboutPage";
import { QAPage } from "./pages/QAPage";
import { AuthPage } from "./pages/AuthPage";
import { ProfilePage } from "./pages/ProfilePage";
import { MyToursPage } from "./pages/MyToursPage";
import { EditTourPage } from "./pages/EditTourPage";
import { NewsPage } from "./pages/NewsPage";
import { GalleryPage } from "./pages/GalleryPage";
import { ReviewsPage } from "./pages/ReviewsPage";
import { ContactsPage } from "./pages/ContactsPage";
import { DonationsPage } from "./pages/DonationsPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "schedule", Component: SchedulePage },
      { path: "tours", Component: ToursCatalogPage },
      { path: "tours/:id", Component: TourDetailPage },
      { path: "about", Component: AboutPage },
      { path: "qa", Component: QAPage },
      { path: "auth", Component: AuthPage },
      { path: "profile", Component: ProfilePage },
      { path: "my-tours", Component: MyToursPage },
      { path: "edit-tour/:id", Component: EditTourPage },
      { path: "news", Component: NewsPage },
      { path: "gallery", Component: GalleryPage },
      { path: "reviews", Component: ReviewsPage },
      { path: "contacts", Component: ContactsPage },
      { path: "donations", Component: DonationsPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
