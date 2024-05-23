const { widget } = figma;
const { SVG } = widget;

export const UnderReview = () => {
  return (
    <SVG
      src={`
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="16" height="16" rx="8" fill="#ED5F00"/>
            <g clip-path="url(#clip0_223_34)">
            <path d="M7.58333 10.9167C9.42428 10.9167 10.9167 9.42428 10.9167 7.58333C10.9167 5.74238 9.42428 4.25 7.58333 4.25C5.74238 4.25 4.25 5.74238 4.25 7.58333C4.25 9.42428 5.74238 10.9167 7.58333 10.9167Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.75 11.75L9.95837 9.95834" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_223_34">
            <rect width="10" height="10" fill="white" transform="translate(3 3)"/>
            </clipPath>
            </defs>
        </svg>`}
    />
  );
};

export const Approved = () => {
  return (
    <SVG
      src={`
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="16" height="16" rx="8" fill="#0E9888"/>
            <path d="M11.3333 5.5L6.74996 10.0833L4.66663 8" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`}
    />
  );
};

export const RequiresRevisions = () => {
  return (
    <SVG
      src={`
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="16" height="16" rx="8" fill="#DC3D43"/>
            <path d="M8 11.3333H11.75" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.875 4.45833C10.0408 4.29257 10.2656 4.19945 10.5 4.19945C10.6161 4.19945 10.731 4.22231 10.8382 4.26673C10.9455 4.31115 11.0429 4.37626 11.125 4.45833C11.2071 4.54041 11.2722 4.63785 11.3166 4.74509C11.361 4.85232 11.3839 4.96726 11.3839 5.08333C11.3839 5.19941 11.361 5.31434 11.3166 5.42158C11.2722 5.52882 11.2071 5.62626 11.125 5.70833L5.91667 10.9167L4.25 11.3333L4.66667 9.66667L9.875 4.45833Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`}
    />
  );
};
