// import { useParams } from "react-router-dom";
// import SinglePageHeader from "../components/SinglePageHeader";
// import pages from "../sidebarPages.json";
// import SinglePageNav from "../components/SinglePageNav";
// import centar from "../assets/images/centar.jpg";
// import { WorkGallery, WorkParagraph } from "../assets/style/SingleWork.style";

// const SingleWork = () => {
//   const { path } = useParams();

//   const selectedPage = pages.find((page) => page.path === path);

//   if (!selectedPage) {
//     return <p>Nepostojeća stranica!</p>;
//   }

//   return (
//     <section>
//       <SinglePageNav />
//       <SinglePageHeader selectedPage={selectedPage} />
//       <WorkGallery>
//         <img src={centar} alt="centar" />
//         <img src={centar} alt="centar" />
//         <img src={centar} alt="centar" />
//       </WorkGallery>
//       <WorkParagraph>
//         "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//         accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
//         illo inventore veritatis et quasi architecto beatae vitae dicta sunt
//         explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
//         odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
//         voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
//         quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
//         eius modi tempora incidunt ut labore et dolore.Duis aute irure dolor in
//         reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//         pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
//         qui officia deserunt mollit anim id est laborum."
//       </WorkParagraph>
//       <WorkGallery>
//         <img src={centar} alt="centar" />
//         <img src={centar} alt="centar" />
//         <img src={centar} alt="centar" />
//       </WorkGallery>
//       <WorkGallery>
//         <img src={centar} alt="centar" />
//         <img src={centar} alt="centar" />
//         <img src={centar} alt="centar" />
//       </WorkGallery>
//       <WorkParagraph>
//         "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//         accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
//         illo inventore veritatis et quasi architecto beatae vitae dicta sunt
//         explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
//         odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
//         voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
//         quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
//         eius modi tempora incidunt ut labore et dolore.Duis aute irure dolor in
//         reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//         pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
//         qui officia deserunt mollit anim id est laborum." "Sed ut perspiciatis
//         unde omnis iste natus error sit voluptatem accusantium doloremque
//         laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
//         veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
//         enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
//         sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
//         nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
//         amet, consectetur, adipisci velit, sed quia non numquam eius modi
//         tempora incidunt ut labore et dolore.
//       </WorkParagraph>
//     </section>
//   );
// };

// export default SingleWork;
