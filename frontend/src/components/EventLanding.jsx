import React from 'react';
import EventCard from './EventCard';

const events = [
  {
    id: 1,
    title: '𝗛𝗔𝗣𝗣𝗬 𝗡𝗘𝗪 𝗬𝗘𝗔𝗥 𝟮𝟬𝟮𝟲',
    description:
      "DevFest GDGoC FPT University HCMC on December 28th and Road to Google Developers Certification is one of the main goals that FPT University student community will achieve to start the journey to become Google Developer Experts.",
    dateLabel: 'Nov 27, 8:00 AM - Dec 28, 6:00 PM (GMT+7)',
    img: 'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/608179377_122132053748072974_4756781424647207735_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGrk3_XP4IZCdWP8GxR8EbXRiWpUaR5IFxGJalRpHkgXMCbijLztKIlg9iDxJ0JJrhBw28xX5j57DL671A5Rz_9&_nc_ohc=ie5RFU-Zn1YQ7kNvwF9uWjX&_nc_oc=AdntZczB11gncoYbkxzSE5lUu7Kn5IJT4Vd5sb2bWoZYeY3rRtk4GgLtlGcbnIN5LhQ1pP5vOu5B_V7Gqn0f2iEP&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=k-YBdg7x_szqCGvRMlElHA&oh=00_Afp6pI6tpIieaWMkO6GlzhZoAH9SNH52HLX1ZFBdpv9CHw&oe=69619659',
    linkUrl: 'https://www.facebook.com/share/p/14R5CdHwxbg/',
    linkText: 'Open on Facebook',
    imgClass: 'w-full object-contain',
    imgStyle: { aspectRatio: '1 / 1', objectFit: 'contain', objectPosition: 'center' },
  },
  {
    id: 2,
    title: '𝗤&𝗔 cùng 𝗚𝗗𝗚𝗼𝗖 𝗙𝗣𝗧𝗨',
    description:
      'Nếu bạn cũng đang phân vân như vậy, tụi mình sẽ giải đáp ngay bên dưới. Biết đâu, câu trả lời bạn cần tìm lại nằm ở đây thì sao 👀',
    img: 'https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/602427136_122131887398072974_2412212343066760207_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEnqqpTFsCHpzQ3rqYt5OZXrwrq1OxvbFKvCurU7G9sUur_Nwo90F_xVwCz2yRnXxnVGKFsLXgojqoXGiEhpnFU&_nc_ohc=k-ziuk1WlxkQ7kNvwFiJVBP&_nc_oc=Adlh6NaVW4vdgV5CUWrCSVYD_i77qMO9wflrHUA1II3wwfMrNB881ZcN_MV8pERvQW-0JCD1VV6TYcYiphZc3D-P&_nc_zt=23&_nc_ht=scontent.fsgn8-3.fna&_nc_gid=qSuR8Y7BAJRfgxDaxRraRA&oh=00_AfrKuRbahxKIXRLU4fpwyU62Tz6vtThflR2IXlKB-_UpVw&oe=6961C89C',
    linkUrl: 'https://www.facebook.com/share/p/1X1tphFLBv/',
    linkText: 'Open on Facebook',
    imgClass: 'w-full object-contain',
    imgStyle: { aspectRatio: '1 / 1', objectFit: 'contain', objectPosition: 'center' },
  },
  {
    id: 3,
    title: '𝗖𝗢𝗠𝗜𝗡𝗚 𝗦𝗢𝗢𝗡',
    description: 'New Chapter',
    imgClass: 'w-full object-contain',
    imgStyle: { aspectRatio: '1 / 1', objectFit: 'contain', objectPosition: 'center' },
    img: 'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/599766146_122131691666072974_1851173601620910894_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHZKsqSZuf5rlA-cD7OHluemky8oFm1zauaTLygWbXNq-_Kbwm604zHRccSrHAW6MI5Jh6U_RLnG0RIpv8DFUp9&_nc_ohc=iXgKNX7Kh-0Q7kNvwGO3IUf&_nc_oc=Adl2MCI1CCPUDjN9hCM-DlIADUzE2Ej4Y1gpe0KWcMJdwLQirU7a7J70wYO-b-0ll48yqvqiopTcdm7HnEIi_2ow&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=uHU_YG7pxKvw5NsrWQX8eg&oh=00_Afpz0NnH94MGHc-N8b3vrZRyKxotBZkIH2p0We5gJODPEw&oe=6961B7BA',
    linkUrl: 'https://www.facebook.com/share/16nN3LXwnK/',
    linkText: 'Open on Facebook',
  },
  {
    id: 4,
    title: "SỰ KIỆN TỔNG KẾT HỌC KỲ SUMMER 2025 - GDG ON CAMPUS FPTU HCM",
    description:
      "Một kỳ học Summer đầy năng lượng đã dần khép lại, và giờ là lúc chúng ta cùng nhìn lại những hành trình tuyệt vời đã cùng nhau đi qua!",
    dateLabel: 'Nov 1, 7:00 AM - 6:00 PM (GMT+7)',
    img: 'https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/561314932_122129832974072974_9073186526397073020_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHb3FRYu3124SePzpiWIOi-0pk6PWqyG23SmTo9arIbbTltyWhvG-iWIn_CV9jnl4FctVY0KbbISQtMP8THadSS&_nc_ohc=B3sW83HAm8IQ7kNvwEQjwp6&_nc_oc=AdlBSPkBvpqn71rCZUJ1Gbgoe1fjsSahxlEeFHnYMPirbJgBCCHeFTMVbq7QSlOm1-fX0D4qka3nSISCmKIZvlkg&_nc_zt=23&_nc_ht=scontent.fsgn8-3.fna&_nc_gid=I72qRvu1RgOmDmYiIfVUBQ&oh=00_Afp0vzSHhP6TMb1LSQITZZoAdU5BVcxWUNrQRjow-1iV9Q&oe=6961C82A',
    linkUrl: 'https://www.facebook.com/share/p/1BsMhQUA6L/',
    linkText: 'Open on Facebook',
    imgClass: 'w-full h-[420px] md:h-[560px] object-cover',
    imgStyle: { objectPosition: 'center' },
  },
];

const EventLanding = () => {
  return (
    <section className="py-10 bg-white">
      <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-8 text-blue-600">Our Events</h2>

      <div className="space-y-8">
        {events.map((ev, idx) => (
          <EventCard
            key={ev.id}
            title={ev.title}
            description={ev.description}
            dateLabel={ev.dateLabel}
            img={ev.img}
            reverse={idx % 2 === 1}
            linkUrl={ev.linkUrl}
            linkText={ev.linkText}
            imgClass={ev.imgClass}
            imgStyle={ev.imgStyle}
          />
        ))}
      </div>
    </section>
  );
};

export default EventLanding;

