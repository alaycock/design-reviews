import { Approved, RequiresRevisions, UnderReview } from "./icons";

const { widget } = figma;
const { AutoLayout, Text, Image, Input } = widget;

const Badge = ({ status }: { status: string }) => {
  let copy: string, color: string, bgColor: string, Icon: FunctionalWidget<{}>;
  switch (status) {
    case "approve":
      copy = "Approved";
      color = "#0E9888";
      bgColor = "#E7F9F5";
      Icon = Approved;
      break;

    case "requiresRevisions":
      copy = "Requires revisions";
      color = "#DC3D43";
      bgColor = "#FFEFEF";
      Icon = RequiresRevisions;
      break;

    case "underReview":
      copy = "Under review";
      color = "#ED5F00";
      bgColor = "#FFF1E7";
      Icon = UnderReview;
      break;

    default:
      copy = "undefined";
      color = "#000";
      bgColor = "#fff";
      Icon = UnderReview;
  }

  return (
    <AutoLayout
      direction="horizontal"
      horizontalAlignItems="start"
      verticalAlignItems="center"
      padding={{ top: 4, left: 6, bottom: 4, right: 8 }}
      fill={bgColor}
      spacing={8}
      cornerRadius={8}
    >
      <Icon />
      <Text
        fontSize={14}
        fontFamily="Inter"
        fontWeight="medium"
        lineHeight={20}
        fill={color}
      >
        {copy}
      </Text>
    </AutoLayout>
  );
};

const DateBar = ({ date }: { date: string }) => {
  const newDate = new Date(date);
  return (
    <AutoLayout direction="horizontal">
      <Text
        fontSize={12}
        fontFamily="Inter"
        fontWeight="normal"
        lineHeight={20}
        fill="#737373"
      >
        {newDate.toLocaleDateString()} • {newDate.toLocaleTimeString()}
      </Text>
    </AutoLayout>
  );
};

type Props = {
  date: string;
  name: string;
  photo: string;
  reviewStatus: string;
  reviewComment: string;
  onReviewComment: (comment: string) => void;
};

const review = ({
  name,
  photo,
  date,
  reviewStatus,
  reviewComment,
  onReviewComment,
}: Props) => {
  return (
    <AutoLayout
      direction="vertical"
      horizontalAlignItems="start"
      verticalAlignItems="start"
      width="fill-parent"
      height="hug-contents"
      padding={8}
      fill="#FFFFFF"
      spacing={12}
    >
      <AutoLayout
        direction="horizontal"
        horizontalAlignItems="start"
        verticalAlignItems="start"
        height="hug-contents"
        fill="#FFFFFF"
        spacing={12}
      >
        <Image src={photo} cornerRadius={50} width={64} height={64} />
        <AutoLayout
          direction="vertical"
          horizontalAlignItems="start"
          verticalAlignItems="start"
          height="hug-contents"
          fill="#FFFFFF"
          spacing={6}
        >
          <Text
            fontFamily="Inter"
            lineHeight={28}
            fontWeight="semi-bold"
            fontSize={20}
          >
            {name}
          </Text>

          <Badge status={reviewStatus} />
        </AutoLayout>
      </AutoLayout>
      <Input
        width="fill-parent"
        onTextEditEnd={(text) => onReviewComment(text.characters)}
        value={reviewComment}
        placeholder="Leave a comment"
        fontSize={16}
        lineHeight={24}
        fontFamily="Inter"
      />
      <DateBar date={date} />
    </AutoLayout>
  );
};

export default review;
