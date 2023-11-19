import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Metodologia from "./Metodologia";
import { calcularCalificacionServicio } from "../utils/Utils";
import { activateClass } from "../controllers/app.controller";

export default function CardClaseAdmin(props) {
  const {
    nombre,
    ubicacion,
    img,
    servicio,
    setModal,
    setPublicacion,
    getData,
  } = props;
  let {
    calificacion,
    categoria,
    costo,
    descripcion,
    _id,
    metodologia,
    activo,
  } = servicio;

  const handleModificar = () => {
    setModal(true);
    setPublicacion(servicio);
  };

  const handleChangeActivate = () => {
    activateClass(_id);
    getData();
  };

  return (
    <div
      className={`rounded-3xl border border-slate-400  w-72 shadow-card ${
        activo ? "" : "bg-gray-100"
      }`}
    >
      <div className="flex relative">
        <Link to={"/clase/" + _id}>
          <img src={img} alt="" className="rounded-3xl w-72 h-72" />
        </Link>
        <span className="absolute bottom-12 left-4 text-3xl font-bold text-white">
          {nombre}
        </span>
        <span className="absolute bottom-4 left-4 text-xl font-bold text-white">
          {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
        </span>
      </div>
      <div className="flex flex-col gap-3 py-3 px-5  justify-between">
        <div className="overflow-hidden text-sm text-gray-500  h-14">
          {descripcion}
        </div>
        <div className="flex flex-col gap-3 pb-1">
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
            >
              <path
                d="M9.50001 0L12.7292 5.5057L19 6.85419L14.725 11.6054L15.3713 17.9444L9.50001 15.3752L3.62867 17.9444L4.275 11.6054L0 6.85419L6.27078 5.5057L9.50001 0Z"
                fill="#FFCB45"
              />
            </svg>
            <span className="font-bold">
              {calcularCalificacionServicio(servicio)}
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="20"
              viewBox="0 0 15 20"
              fill="none"
            >
              <path
                d="M7.5 0.944458C3.3625 0.944458 0 4.30696 0 8.44446C0 12.457 6.76875 19.2257 7.0625 19.5132C7.18125 19.632 7.34375 19.6945 7.5 19.6945C7.65625 19.6945 7.81875 19.632 7.9375 19.5132C8.23125 19.2257 15 12.457 15 8.44446C15 4.30696 11.6375 0.944458 7.5 0.944458Z"
                fill="#3F51B5"
              />
              <path
                d="M7.5 11.5695C9.22589 11.5695 10.625 10.1703 10.625 8.44446C10.625 6.71857 9.22589 5.31946 7.5 5.31946C5.77411 5.31946 4.375 6.71857 4.375 8.44446C4.375 10.1703 5.77411 11.5695 7.5 11.5695Z"
                fill="#2197F3"
              />
            </svg>
            <span className="text-sm">{ubicacion}</span>
          </div>
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="17"
              viewBox="0 0 20 17"
              fill="none"
            >
              <path
                d="M17.6066 0.896966L1.35449 4.94324L3.54697 13.7494L19.799 9.70316L17.6066 0.896966Z"
                fill="#78A271"
              />
              <path
                d="M19.4254 7.52102L18.3014 2.99926L17.8131 1.03809L17.7278 0.694458L17.5211 0.746138L15.423 1.26805L3.45715 4.24985L1.15234 4.82344L1.53215 6.34532L1.5709 6.50809L1.61223 6.66829L1.7259 7.12563L1.98168 8.15657L2.85242 11.6473L3.35367 13.6628L3.42602 13.9495L3.71023 13.8798L5.72824 13.3759L16.6476 10.6577L17.6967 10.3967L18.1437 10.2856L18.3065 10.2443L18.4667 10.2055L19.9989 9.82313L19.4254 7.52102ZM16.8984 10.2522L10.6351 11.8128L9.55504 12.0815L5.64824 13.0557L3.66902 13.5491L3.17551 11.5673L2.22207 7.74321L2.04895 7.04559L1.93527 6.58825L1.89395 6.42809L1.8552 6.26528L1.55547 5.06379L3.53727 4.57024L15.5057 1.59106L17.4849 1.09754L17.9784 3.07938L19.105 7.60114L19.5985 9.5804L18.3867 9.8827L18.2239 9.92145L18.0638 9.96282L17.6167 10.0739L16.8984 10.2522Z"
                fill="#48793E"
              />
              <path
                d="M11.2676 10.097C9.73788 10.4779 8.18351 9.54325 7.80257 8.01352C7.42167 6.48379 8.35628 4.92942 9.88601 4.54848C11.4157 4.16758 12.9701 5.10219 13.351 6.63192C13.7319 8.16165 12.7973 9.71606 11.2676 10.097Z"
                fill="#48793E"
              />
              <path
                d="M11.639 7.31458C11.5787 7.22138 11.501 7.14958 11.406 7.09919C11.3287 7.05278 11.2429 7.02294 11.1484 7.00942C11.0539 6.99591 10.9385 6.99602 10.8023 7.01001L10.776 7.01247L10.4471 7.0429C10.3836 7.05032 10.3286 7.04958 10.2822 7.04118C10.2629 7.03782 10.2444 7.03329 10.2267 7.02782C10.2022 7.0202 10.1796 7.01067 10.1585 6.99934C10.1216 6.97731 10.093 6.95028 10.072 6.91845C10.0514 6.88657 10.0362 6.85188 10.0268 6.81427C10.0021 6.71485 10.0164 6.62087 10.0698 6.53208C10.0771 6.51993 10.0853 6.50825 10.0946 6.49731C10.152 6.42649 10.2457 6.37505 10.3755 6.34274C10.4459 6.3252 10.5208 6.31329 10.6003 6.3072C10.627 6.30513 10.6541 6.30368 10.6817 6.30278C10.792 6.29962 10.9022 6.32989 11.0121 6.39364L11.279 5.9552C11.1256 5.86524 10.9688 5.81317 10.8085 5.79895C10.7057 5.78993 10.5948 5.79372 10.4765 5.81091C10.4573 5.74352 10.4132 5.68911 10.3567 5.65532C10.2978 5.61974 10.2253 5.60677 10.1538 5.62458C10.0107 5.6602 9.92257 5.80649 9.95828 5.94981L9.96218 5.96544C9.92917 5.98255 9.89765 6.00075 9.86769 6.02048C9.75495 6.09399 9.66523 6.17981 9.59839 6.27751C9.53163 6.3754 9.48847 6.48306 9.46933 6.60036C9.44999 6.7177 9.4566 6.84087 9.4887 6.9697C9.54949 7.2138 9.66464 7.3847 9.8341 7.48196C9.91402 7.5277 10.0028 7.55895 10.1011 7.57587C10.1787 7.58903 10.2667 7.59306 10.366 7.58731C10.3929 7.58591 10.4203 7.58391 10.4487 7.58114L10.8039 7.54825C10.8438 7.54431 10.8784 7.5422 10.9078 7.54161C10.9339 7.54134 10.956 7.54212 10.9739 7.54438C11.0121 7.54907 11.0492 7.56122 11.0855 7.58056C11.1591 7.62497 11.2085 7.69684 11.2332 7.79602C11.2619 7.91149 11.241 8.01075 11.1705 8.09368C11.1434 8.12591 11.1088 8.15497 11.0669 8.18079C11.0003 8.22216 10.9151 8.25563 10.8111 8.28153C10.7228 8.30352 10.6353 8.31692 10.5489 8.32157C10.5069 8.32384 10.4654 8.32411 10.4238 8.32243C10.2972 8.31692 10.1769 8.28005 10.0629 8.21149L9.79081 8.66376C9.96574 8.77145 10.1451 8.83138 10.3293 8.84395C10.4389 8.85153 10.5544 8.84704 10.6759 8.83075C10.7136 8.97067 10.8582 9.0561 10.9995 9.02091C11.1428 8.9852 11.2307 8.8388 11.1951 8.69567L11.1942 8.69204C11.244 8.67001 11.2917 8.6454 11.3374 8.61837C11.458 8.54724 11.5565 8.46282 11.6334 8.36528C11.7103 8.26774 11.7623 8.1586 11.7892 8.03794C11.8162 7.91727 11.8121 7.7872 11.7774 7.64774C11.7454 7.51891 11.6993 7.40802 11.639 7.31458Z"
                fill="#78A271"
              />
              <path
                d="M6.0504 9.79935C6.55973 9.79935 6.97263 9.38645 6.97263 8.87712C6.97263 8.36779 6.55973 7.9549 6.0504 7.9549C5.54107 7.9549 5.12817 8.36779 5.12817 8.87712C5.12817 9.38645 5.54107 9.79935 6.0504 9.79935Z"
                fill="#48793E"
              />
              <path
                d="M3.35113 5.89316C3.32012 5.96035 3.28395 6.02492 3.24777 6.08953V6.0921C3.20125 6.16445 3.15477 6.23164 3.10051 6.29882C2.91703 6.53652 2.68449 6.73808 2.41062 6.88535C2.29695 6.94996 2.17547 7.00421 2.04887 7.04554C1.99719 7.06105 1.94293 7.0766 1.88867 7.09207C1.83441 7.10496 1.78016 7.11531 1.7259 7.12566L1.61223 6.66832L1.5709 6.50812L1.53215 6.34535L1.15234 4.82347L3.45715 4.24988C3.47266 4.30156 3.48816 4.35324 3.50105 4.4075C3.51656 4.46175 3.52691 4.51601 3.53723 4.57027C3.61723 5.03273 3.54492 5.49265 3.35113 5.89316Z"
                fill="#48793E"
              />
              <path
                d="M5.69493 13.2143C5.70841 13.2684 5.71962 13.3226 5.72896 13.3769L3.42618 13.9503L2.85278 11.6475C2.90478 11.6304 2.95794 11.6149 3.01235 11.6013C3.06642 11.5878 3.12063 11.5766 3.17493 11.5673C4.25224 11.3823 5.30696 12.0165 5.64876 13.0547C5.66595 13.1071 5.68149 13.1602 5.69493 13.2143Z"
                fill="#48793E"
              />
              <path
                d="M18.3015 2.99926C18.2472 3.01473 18.1956 3.03024 18.1413 3.04317C18.087 3.05868 18.0328 3.06903 17.9785 3.07934C17.5108 3.15942 17.0483 3.0845 16.6452 2.88813C16.5186 2.82872 16.3998 2.75633 16.2887 2.6711C15.9321 2.41012 15.6531 2.03805 15.5058 1.59102C15.4877 1.53934 15.4722 1.48508 15.4593 1.43083C15.4438 1.37657 15.4334 1.32231 15.4231 1.26805L17.5212 0.746138L17.7279 0.694458L17.8131 1.03809L18.3015 2.99926Z"
                fill="#48793E"
              />
              <path
                d="M19.4265 7.52057L19.9999 9.82334L17.6972 10.3967C17.6799 10.3444 17.6644 10.2912 17.6509 10.2372C17.6375 10.1831 17.6263 10.1289 17.6169 10.0746C17.4319 8.99725 18.0661 7.94256 19.1043 7.60076C19.1563 7.58365 19.2095 7.56811 19.2639 7.55455C19.318 7.54115 19.3722 7.5299 19.4265 7.52057Z"
                fill="#48793E"
              />
              <path
                d="M15.1258 7.53952C15.6352 7.53952 16.0481 7.12663 16.0481 6.61729C16.0481 6.10796 15.6352 5.69507 15.1258 5.69507C14.6165 5.69507 14.2036 6.10796 14.2036 6.61729C14.2036 7.12663 14.6165 7.53952 15.1258 7.53952Z"
                fill="#48793E"
              />
              <path
                d="M16.4523 2.80241L0.200195 6.84869L2.39267 15.6549L18.6448 11.6086L16.4523 2.80241Z"
                fill="#91B78B"
              />
              <path
                d="M18.4668 10.2057L18.4281 10.043L18.3868 9.88273L18.2731 9.42539L18.0173 8.39441L17.1465 4.90363L16.6453 2.88824L16.5729 2.60144L16.2887 2.67121L14.2707 3.17503L3.35129 5.89324L2.30223 6.15421L1.8552 6.26531L1.69242 6.30667L1.53223 6.34542L0 6.72781L0.573633 9.03003L1.69762 13.5518L2.09039 15.1279L2.27125 15.8566L2.71051 15.748L4.57605 15.2829L16.5419 12.3012L18.8467 11.7276L18.4668 10.2057ZM3.10063 6.29894L9.36387 4.73828L10.4439 4.46953L14.3507 3.49539L16.33 3.00191L16.8235 4.98371L17.7769 8.80781L17.95 9.50542L18.0637 9.96277L18.105 10.123L18.1438 10.2857L18.4435 11.4872L16.4617 11.9807L4.49328 14.9599L2.5141 15.4535L2.02059 13.4717L0.894023 8.94996L0.400508 6.9707L1.61234 6.66839L1.77512 6.62964L1.93531 6.58828L2.38234 6.47718L3.10063 6.29894Z"
                fill="#48793E"
              />
              <path
                d="M10.1133 12.0024C8.58359 12.3833 7.02921 11.4486 6.64828 9.91892C6.26738 8.38919 7.20199 6.83482 8.73171 6.45388C10.2614 6.07298 11.8158 7.00759 12.1968 8.53732C12.5777 10.067 11.643 11.6214 10.1133 12.0024Z"
                fill="#48793E"
              />
              <path
                d="M10.4846 9.21995C10.4244 9.12675 10.3467 9.05499 10.2516 9.00456C10.1744 8.95816 10.0886 8.92831 9.9941 8.9148C9.89961 8.90128 9.78421 8.9014 9.64796 8.91538L9.62164 8.91784L9.29281 8.94827C9.22925 8.95569 9.17425 8.95495 9.12789 8.94652C9.10851 8.94316 9.09007 8.93862 9.07238 8.93316C9.04789 8.92554 9.02531 8.91601 9.00421 8.90468C8.96722 8.88265 8.93863 8.85562 8.91769 8.82378C8.89703 8.79191 8.88187 8.75722 8.8725 8.7196C8.84773 8.62019 8.86211 8.5262 8.9155 8.43741C8.92281 8.42527 8.93097 8.41359 8.94027 8.40265C8.99769 8.33183 9.09136 8.28038 9.22113 8.24808C9.29156 8.23054 9.36648 8.21862 9.44601 8.21253C9.47265 8.21046 9.49972 8.20902 9.52738 8.20812C9.63769 8.20495 9.74789 8.23519 9.85781 8.29898L10.1247 7.8605C9.97129 7.77054 9.81449 7.71847 9.65418 7.70425C9.5514 7.69523 9.44054 7.69902 9.32218 7.7162C9.303 7.64886 9.2589 7.59441 9.20242 7.56066C9.14355 7.52507 9.07105 7.5121 8.99949 7.52991C8.8564 7.56554 8.76824 7.71183 8.80394 7.85515L8.80785 7.87077C8.77484 7.88788 8.74332 7.90609 8.71336 7.92581C8.60062 7.99933 8.51089 8.08515 8.4441 8.18284C8.37734 8.28073 8.33418 8.38839 8.31503 8.50569C8.2957 8.62304 8.3023 8.7462 8.33437 8.87503C8.39515 9.11913 8.51031 9.29003 8.67976 9.3873C8.75968 9.43304 8.84851 9.46429 8.94675 9.4812C9.02433 9.49433 9.11238 9.49839 9.21171 9.49265C9.23855 9.49124 9.26593 9.48925 9.29437 9.48648L9.64953 9.45359C9.68945 9.44964 9.72402 9.44753 9.75343 9.44694C9.77957 9.44667 9.80164 9.44745 9.81953 9.44972C9.85773 9.45441 9.89488 9.46655 9.93121 9.48589C10.0048 9.5303 10.0542 9.60218 10.0789 9.70136C10.1077 9.81683 10.0867 9.91609 10.0162 9.99902C9.98914 10.0312 9.95453 10.0603 9.91261 10.0861C9.84597 10.1275 9.76078 10.161 9.65683 10.1868C9.56851 10.2088 9.48097 10.2222 9.39461 10.2269C9.35261 10.2291 9.31109 10.2294 9.26953 10.2277C9.14289 10.2222 9.02261 10.1853 8.90863 10.1168L8.63652 10.5691C8.81144 10.6767 8.99086 10.7367 9.17503 10.7492C9.28464 10.7568 9.40015 10.7523 9.52164 10.736C9.55937 10.876 9.70398 10.9614 9.84527 10.9262C9.98859 10.8905 10.0764 10.7441 10.0408 10.601L10.0399 10.5973C10.0897 10.5753 10.1375 10.5507 10.1832 10.5237C10.3037 10.4525 10.4022 10.3681 10.4791 10.2706C10.5561 10.173 10.608 10.0639 10.635 9.94323C10.6619 9.82253 10.6579 9.69249 10.6232 9.55304C10.5911 9.42429 10.5449 9.31339 10.4846 9.21995Z"
                fill="#91B78B"
              />
              <path
                d="M4.89635 11.7047C5.40568 11.7047 5.81857 11.2918 5.81857 10.7825C5.81857 10.2732 5.40568 9.86029 4.89635 9.86029C4.38702 9.86029 3.97412 10.2732 3.97412 10.7825C3.97412 11.2918 4.38702 11.7047 4.89635 11.7047Z"
                fill="#48793E"
              />
              <path
                d="M2.41074 6.88536C2.40816 7.18509 2.34098 7.47708 2.22211 7.74318C2.18852 7.82072 2.14977 7.89564 2.10844 7.96802C2.06969 8.03263 2.02832 8.0972 1.98184 8.15661C1.72086 8.51833 1.34621 8.80001 0.894023 8.94989C0.842344 8.96798 0.790664 8.98345 0.736406 8.99638H0.733828C0.67957 9.00931 0.625313 9.0222 0.573633 9.02997L0 6.72775L1.53223 6.34532L1.69242 6.30657L1.8552 6.26521L2.30223 6.15411C2.32031 6.20579 2.33582 6.26005 2.34871 6.31431C2.36164 6.36857 2.37195 6.42286 2.3823 6.47708C2.40559 6.61407 2.4159 6.75103 2.41074 6.88536Z"
                fill="#48793E"
              />
              <path
                d="M4.57595 15.2829L2.7104 15.748L2.27114 15.8565L2.09028 15.1279L1.69751 13.5517C1.75177 13.5363 1.80345 13.5207 1.8577 13.5078C1.91196 13.4923 1.96622 13.482 2.02048 13.4717C2.48813 13.3915 2.95067 13.4665 3.35376 13.6629C3.4804 13.7223 3.59923 13.7946 3.71032 13.8799C4.06688 14.1408 4.34595 14.5129 4.49325 14.9599C4.51134 15.0116 4.52685 15.0659 4.53978 15.1201C4.55528 15.1743 4.5656 15.2286 4.57595 15.2829Z"
                fill="#48793E"
              />
              <path
                d="M16.5728 2.60065L17.1462 4.90342C17.0938 4.92065 17.0407 4.93615 16.9867 4.94963C16.9322 4.96319 16.878 4.9744 16.824 4.98365C15.7467 5.16865 14.692 4.53451 14.3503 3.49623C14.333 3.44389 14.3175 3.39073 14.304 3.33666C14.2906 3.2826 14.2794 3.22838 14.27 3.17405L16.5728 2.60065Z"
                fill="#48793E"
              />
              <path
                d="M18.2724 9.4259L18.8458 11.7287L16.5431 12.3021C16.5258 12.2498 16.5103 12.1966 16.4969 12.1425C16.4834 12.0885 16.4722 12.0343 16.4629 11.9799C16.2779 10.9026 16.912 9.84793 17.9503 9.50614C18.0023 9.48903 18.0554 9.47348 18.1099 9.45997C18.1639 9.44649 18.2181 9.43528 18.2724 9.4259Z"
                fill="#48793E"
              />
              <path
                d="M13.9715 9.44492C14.4809 9.44492 14.8938 9.03202 14.8938 8.52269C14.8938 8.01336 14.4809 7.60046 13.9715 7.60046C13.4622 7.60046 13.0493 8.01336 13.0493 8.52269C13.0493 9.03202 13.4622 9.44492 13.9715 9.44492Z"
                fill="#48793E"
              />
              <path
                opacity="0.06"
                d="M19.4255 7.83463L18.3015 3.31314L17.8132 1.35197L17.7279 1.0083L17.5321 1.05725L2.46753 16.1219L2.71054 16.0619L4.57608 15.5967L16.5419 12.615L16.5427 12.6148C16.5428 12.6152 16.543 12.6156 16.5431 12.616L18.8459 12.0426L18.8457 12.0417L18.8468 12.0414L18.467 10.5195L19.3666 10.295L20.0001 10.1372L19.4267 7.83439C19.4262 7.83443 19.4258 7.83459 19.4255 7.83463Z"
                fill="#040000"
              />
            </svg>
            <span className="text-sm">${costo}/ hora</span>
          </div>
          <div className="flex mt-3 gap-3">
            {metodologia == "Ambas" ? (
              <>
                <Metodologia metodologia={"Presencial"} />
                <Metodologia metodologia={"Virtual"} />
              </>
            ) : metodologia == "Presencial" ? (
              <Metodologia metodologia={"Presencial"} />
            ) : (
              <Metodologia metodologia={"Virtual"} />
            )}
          </div>
          <div className="flex items-center flex-col gap-2 mt-2">
            <button className="bg-coral rounded-lg p-2 w-2/3 text-white border border-coral hover:bg-white hover:text-coral transition-all">
              Eliminar
            </button>
            {activo ? (
              <button
                className="bg-coral rounded-lg p-2 w-2/3 text-white border border-coral hover:bg-white hover:text-coral transition-all"
                onClick={handleChangeActivate}
              >
                Despublicar
              </button>
            ) : (
              <button
                className="bg-verde rounded-lg p-2 w-2/3 text-white border border-verde hover:bg-white hover:text-verde transition-all"
                onClick={handleChangeActivate}
              >
                Publicar
              </button>
            )}
            <button
              className="bg-celeste rounded-lg p-2 w-2/3 text-white border border-celeste hover:bg-white hover:text-celeste transition-all"
              onClick={handleModificar}
            >
              Modificar
            </button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
