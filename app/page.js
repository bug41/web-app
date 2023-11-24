'use client';

import Image from 'next/image'
import styles from './page.module.css'
import { Share } from '@capacitor/share'

export default function Home() {

  const share = async () => {
    await Share.share({
      title : '이탱탱탱탱',
      text: 'Learn to build awesome 뭐시기',
      url: 'https://www.naver.com',
      dialogTitle : 'Share with Me'
    })
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          너무 오래걸리는데 이ㅓㄹ면 누가 쓰냐 ? ㅋㅋ 빠르네&nbsp;
          <code className={styles.code}>app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>


      <a onClick={() => share()}>공유하기!</a>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  )
}
