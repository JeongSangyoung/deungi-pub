const reviewList = [
  {
    author: '주식회사 김OO 대표님',
    content: '사업 시작 후 바빠서 등기소 방문할 시간도 없었는데 온라인으로 진행되서 너무 편했습니다. 바쁜 사업자들에게 추천합니다.',
  },
  {
    author: '주식회사 박OO 대표님',
    content: '법인설립 처음이라서 궁금한 것도 모르는 것도 많았는데요. 친절하고 자세히 설명해주셔서 굉장히 만족스러웠습니다.',
  },
  {
    author: '유한회사 한OO 대표님',
    content: '문의사항에 대한 대응이 너무나 친절하고 신속 하였습니다. 저렴한 가격에 최고의 서비스를 받았습니다. 주변 사람들에게도 요즘 법무사 가서 등기하는사람 있냐고 등기24 적극 추천 중 입니다.',
  },
  {
    author: '주식회사 배OO 대표님',
    content: '추가적인 유료 서비스 가입 유도 없는 정직한 비용 책정 부분이 마음에 들었습니다.',
  },
  {
    author: '주식회사 박OO 대표님',
    content: '아무것도 모르는 상태에서 직접 발로 뛰지 않고 알아보면서 도움받고자 하였는데 서비스와 일처리 속도나 너무나 만족하였습니다.',
  },
  {
    author: '주식회사 김OO 대표님',
    content: '법인설립 처음 접하는 사람들도 보기 쉽게 되어 있다는게 너무 좋았습니다. 부동산업을 하고 있어 주변 고객들에게도 강력 추천하였습니다.',
  },
  {
    author: '주식회사 정OO 대표님',
    content: '시간과 장소 구애없이 진행할 수 있는 것이 편할 것 같았고, 가격정책 등을 투명하게 공개한 것이 신뢰가 갔습니다.',
  },
  {
    author: '김OO 대표님',
    content: '비대면으로 하는것이라서 설명이 부족할 줄 알았는데 시스템이 너무 좋습니다. 사업자로만 하다가 법인으로 처음 해보는데 너무 감사하였습니다.',
  },
  {
    author: '민OO 대표님',
    content: '초보자인데 시작하기가 어렵지않게 설명도 잘되어있고 상담할때도 친절하게 답변도 해주셨습니다.',
  },
  {
    author: '백OO 대표님',
    content: '세무기장 의무가 없어서 좋았고 수수료가 저렴했습니다. 그리고 신청방법이 간단하고 쉽게 이해되었습니다.',
  },
  {
    author: '김OO 대표님',
    content: '법인설립이 개인이 하기에는 많은 서류와 시간 그리고 방법 등 어려움이 있는데 등기24의 친절한 설명과 신속한 처리로 잘 마무리했어요. 감사합니다.',
  },
  {
    author: '유OO 대표님',
    content: '복잡한 절차를 온라인을 통해 일괄적이고 간편하게 만든 시스템이 장점',
  },
  {
    author: '윤OO 대표님',
    content: '홈페이지에서 예상금액도 쉽게 알수 있으며 담당자님이 진행도 너무 친절하셨습니다. 어려운 법인설립 도와주셔서 감사합니다.',
  },
  {
    author: '안OO 대표님', 
    content: '지인추천으로 알게 되서 진행했는데수수료에 거품이 없어서 좋았고, 부가적인 유료서비스 권유도 없어서 좋았습니다.',
  },
  {
    author: '유OO 대표님',
    content: '신청하면서 몰랐던 공과금 감면 혜택도 알게 되고 시스템이 잘 되어있어서 좋았습니다.',
  },
];
const reviewCopy1 = reviewList.concat(reviewList).concat(reviewList).concat(reviewList);
const reviewCopy2 = reviewList.concat(reviewList).concat(reviewList).concat(reviewList);

const $review1 = document.getElementById('p8-slide-l');
const $review2 = document.getElementById('p8-slide-r');

const createReviewElement = (review, idx) => {
  const $li = document.createElement('li');
  $li.classList.add([`sl-${idx}`]);

  const $review_content = document.createElement('p');
  const $review_author = document.createElement('p');
  const $author_wrap = document.createElement('div');
  const $star_wrap = document.createElement('div');
  const $review_wrap = document.createElement('div');
  
  $review_content.textContent = review.content;
  $review_author.textContent = review.author;

  $review_wrap.classList.add('rWrap');
  $li.classList.add('rCard');
  $review_content.classList.add('r-content')
  $review_author.classList.add('r-author')
  $author_wrap.classList.add('authorWrap')

  $review1.style.width = 40 * reviewCopy1.length + 'rem';

  $review_wrap.appendChild($review_content);
  for (let i = 0; i < 5; i += 1) {
    const $star = document.createElement('img');
    $star.src = './images/star.svg';
    $star_wrap.appendChild($star);
  }
  $author_wrap.appendChild($review_author);
  $author_wrap.appendChild($star_wrap);
  $review_wrap.appendChild($author_wrap);

  $li.appendChild($review_wrap);

  return $li;
}

reviewCopy1.forEach((review, idx) => {
  const $li = createReviewElement(review, idx);
  $review1.appendChild($li);
});

const createReviewElement2 = (review, idx) => {
  const $li = document.createElement('li');
  $li.classList.add([`sr-${idx}`]);

  const $review_content = document.createElement('p');
  const $review_author = document.createElement('p');
  const $author_wrap = document.createElement('div');
  const $star_wrap = document.createElement('div');
  const $review_wrap = document.createElement('div');
  
  $review_content.textContent = review.content;
  $review_author.textContent = review.author;

  $review_wrap.classList.add('rWrap');
  $li.classList.add('rCard');
  $review_content.classList.add('r-content')
  $review_author.classList.add('r-author')
  $author_wrap.classList.add('authorWrap')

  $review2.style.width = 40 * reviewCopy2.length + 'rem';

  $review_wrap.appendChild($review_content);
  for (let i = 0; i < 5; i += 1) {
    const $star = document.createElement('img');
    $star.src = './images/star.svg';
    $star_wrap.appendChild($star);
  }
  $author_wrap.appendChild($review_author);
  $author_wrap.appendChild($star_wrap);
  $review_wrap.appendChild($author_wrap);

  $li.appendChild($review_wrap);

  return $li;
}

reviewCopy2.forEach((review, idx) => {
  const $li = createReviewElement2(review, idx);
  $review2.appendChild($li);
});