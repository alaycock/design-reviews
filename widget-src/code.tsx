import Review from "./review";

const { widget } = figma;
const { AutoLayout, Fragment, Text, usePropertyMenu, useSyncedMap, Rectangle } =
  widget;

const reviewOptions = [
  {
    option: "review",
    label: "Review",
  },
  {
    option: "approve",
    label: "Approve",
  },
  {
    option: "requiresRevisions",
    label: "Requires revisions",
  },
  {
    option: "underReview",
    label: "Under review",
  },
  {
    option: "dismiss",
    label: "Dismiss review",
  },
];

function Widget() {
  const reviewMap = useSyncedMap<any>("userIdReviews");

  usePropertyMenu(
    [
      {
        itemType: "dropdown",
        tooltip: "Leave a review",
        propertyName: "leaveReview",
        options: reviewOptions,
        selectedOption: "review",
      },
    ],
    (e) => {
      if (figma.currentUser?.id) {
        const existingReview = reviewMap.get(figma.currentUser.id);

        // Ignore the 'Review' selection
        if (e.propertyValue === "review") {
          return;
        }

        // Allow for dismissing of reviews
        if (e.propertyValue === "dismiss") {
          reviewMap.delete(figma.currentUser.id);
          return;
        }

        // Dismiss if the review status hasn't changed
        if (existingReview?.review === e.propertyValue) {
          return;
        }

        reviewMap.set(figma.currentUser.id, {
          name: figma.currentUser.name,
          photo: figma.currentUser.photoUrl,
          userID: figma.currentUser.id,
          review: e.propertyValue,
          reviewComment: "",
          date: new Date().toISOString(),
        });
      }
    }
  );

  const reviews = reviewMap.values();
  return (
    <AutoLayout
      direction="vertical"
      horizontalAlignItems="start"
      verticalAlignItems="start"
      height="hug-contents"
      padding={24}
      fill="#FFFFFF"
      cornerRadius={20}
      spacing={24}
      width={360}
    >
      <Text
        fontSize={20}
        fontFamily="Inter"
        fontWeight="medium"
        lineHeight={20}
        width="fill-parent"
      >
        Feedback
      </Text>
      <Rectangle
        width="fill-parent"
        height={1}
        fill={{ r: 0, g: 0, b: 0, a: 0.15 }}
      />
      {reviews.length > 0 ? (
        reviews.map((review, i) => {
          const isLast = i === reviews.length - 1;
          return (
            <Fragment key={review.userID}>
              <Review
                date={review.date}
                name={review.name}
                photo={review.photo}
                reviewComment={review.reviewComment}
                reviewStatus={review.review}
                onReviewComment={(reviewComment) => {
                  reviewMap.set(review.userID, {
                    ...review,
                    reviewComment: reviewComment,
                  });
                }}
              />
              {!isLast ? (
                <Rectangle
                  width="fill-parent"
                  height={1}
                  fill={{ r: 0, g: 0, b: 0, a: 0.15 }}
                />
              ) : null}
            </Fragment>
          );
        })
      ) : (
        <Text
          fontSize={14}
          fontFamily="Inter"
          fontWeight="medium"
          lineHeight={20}
          width="fill-parent"
        >
          Leave a review using the dropdown. ⬆️
        </Text>
      )}
    </AutoLayout>
  );
}
widget.register(Widget);
