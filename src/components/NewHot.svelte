<script>
  import "../components/_Artists.scss";
  let title = "New Hot";
  let data = [
    {
      name: "МУСТА Т.Бат-Оч",
      image:
        "https://s3-alpha-sig.figma.com/img/3535/aebb/a92d1f352e44b416b8b126a548856e56?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NYbqi-mh3TK~DhSZagh~MlBRtk3~y8Uv8k~ClkQS9PKdM-uMgNJX~TOAbD3LechzqQeYjCCUVUDOFFdw8STO74vZzfsCBSISNhbR9Jc5FOZKAgPmww0HaQhXcOjyrQGfOT5I6RWbjRjCQ-SZh-z5zfAFKULd5Lks14k-PbbRl4bFOFHw~ArwMQDYk-mSDwn8gCVxpLU62n6aUjuFoFnjAAUWHyaAhU3N4ob52nNVL4rIROro96tIpLVoCVJ3aY7BJhd9GdLZ5ThROIR81aJDlFUXMCTaUJYxzVNZEA0FMDgFDTM~mRROY41-h9j9yxKADrQxU5VezxIMam4cMETJBg__",
    },
    {
      name: "МУСТА А.Бат-Эрдэнэ",
      image:
        "https://s3-alpha-sig.figma.com/img/8d25/6854/07479f8c44319f5739b90b48c23694ef?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q8Evshwfjb4EyB9z2zrSpCUbqM09TqB4Ryo0SVuYRmAvFTrgg~6tybsGnBN3C01rlqujjlIki0laAMD8cUO~MR7Fbu9kvDxKwrD6oO4J0d8UEVwKtjWz2IvJB0itfYzJSiN9iYYHM2udL2LH~YXoRNXJkzdzsahvTGRcjP7HRMo-YGH5zbCqQJ9FYavcCVqUC4tbIx69O65RuKhiOQv9MkqConIrUP4XCYhz9FHEWYvO75w5KfwIc2glojZIRyRhMW6diAQ0kfAUnjY~os547cBQ892F8vE~VNLUjvckP3q4YQWazi0959uAa44GzHkGGUXUtbqz5LKlsUbqyemoog__",
    },
    {
      name: "МУСТА А.Бат-Эрдэнэ",
      image:
        "https://s3-alpha-sig.figma.com/img/0270/7bfa/60c2227eca410c9c7bd8be6f42abfb46?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ui9kKdkpH84nM64Wwklg6wfMZZSDirJb97uPBPiClEM1zEv5JFGZEuPojeQaQxln3xlz7k2U3ARdVVGZJQ9jc~qpbDUvvqWJfJM9-in~rmCoDaGEWApbjcbgHudZ~Ere1jDEbIriaWGphOkwN795bU8XcGtvpSLgFVMNUrhjAcylH~SDDXEGM02HUxUQc7szVAlHRWEXsebxqtHc4tP06CPb~3ELZil5ZQZY9jf2ke84RFY1-Qu0ngA7FZC1aBSi3EIfnByxYzKp6YmvMURZ5XWnJdL-zW2-WPYuwd5hr8cscYKbC1o3P96prF9u94q9VOOXIPUrC6XYaFj9ftzWFQ__",
    },
    {
      name: "МУСТА А.Бат-Эрдэнэ",
      image:
        "https://s3-alpha-sig.figma.com/img/48f8/b399/18a20598526daa8e237ad0509f6faf36?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mjzIzRQ7MAfaE~FB~BrdZ7aTSgEo226Qc5ATb11wh6CClDyNZuDrkmC4cdEBpTM8mzfLGc7oh1FN~oM-wjs1pvzzOm4I1j1jeNJuf1mBf7kl5SPeiNedHsunO-Z9lT-SXQ-BPFPpmrTaFresja-SWLcfrI9R9ST5h4uGGMurIt1u9MdOTqfi4Olp3h6k0lH3Hf4e55Oy4EqjH9BM9D~9OA5-9mzICLfUs8Jh7OZRxaByPfXPtGkSHZyGArfQzl7MPfLYl9V87LSfMSImCWRhmjx0VVvfrLk72-uCKtvb0U8ypzozqd88XPVAc6Y68hZKggn6QkHelx8U331RsXzGLQ__",
    },
    {
      name: "МУСТА А.Бат-Эрдэнэ",
      image:
        "https://s3-alpha-sig.figma.com/img/29ec/8218/d8a39b8f700d86d1abca288438ca9108?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=crODeZhFhRNPzdWa575lzP0zS-1BVqcOe1xs1zZEQZsNtvrwVjjuHkF-lWqY~QBAcxo4IalszpY7khZt5eSv1V7liMr8YRvOYcZGW28zTBqUULwUFlpZFC4oN4viYGnkgj1IQYsPIfaG1zCaVa84JA0rMFJipyz01uTBb1bbJW6tARO79bMdqmwJtACdeyNAZnUU1SdWFGi0DwS9jmSuuhKqMVBk8a30EaJz4Cjzdo-odCh1Dnv8~3M9L2EELvmXPh6QCnbsr6H~WNHP1ZJFDF0JDUqDFsgwFXbKiSqctXnKOmqIrFAxmqTvwIO4X5~hNYt14ZDZeJSOQ4-V2MpafQ__",
    },

    {
      name: "МУСТА А.Бат-Эрдэнэ",
      image:
        "https://s3-alpha-sig.figma.com/img/8d25/6854/07479f8c44319f5739b90b48c23694ef?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q8Evshwfjb4EyB9z2zrSpCUbqM09TqB4Ryo0SVuYRmAvFTrgg~6tybsGnBN3C01rlqujjlIki0laAMD8cUO~MR7Fbu9kvDxKwrD6oO4J0d8UEVwKtjWz2IvJB0itfYzJSiN9iYYHM2udL2LH~YXoRNXJkzdzsahvTGRcjP7HRMo-YGH5zbCqQJ9FYavcCVqUC4tbIx69O65RuKhiOQv9MkqConIrUP4XCYhz9FHEWYvO75w5KfwIc2glojZIRyRhMW6diAQ0kfAUnjY~os547cBQ892F8vE~VNLUjvckP3q4YQWazi0959uAa44GzHkGGUXUtbqz5LKlsUbqyemoog__",
    },
    {
      name: "МУСТА А.Бат-Эрдэнэ",
      image:
        "https://s3-alpha-sig.figma.com/img/0270/7bfa/60c2227eca410c9c7bd8be6f42abfb46?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ui9kKdkpH84nM64Wwklg6wfMZZSDirJb97uPBPiClEM1zEv5JFGZEuPojeQaQxln3xlz7k2U3ARdVVGZJQ9jc~qpbDUvvqWJfJM9-in~rmCoDaGEWApbjcbgHudZ~Ere1jDEbIriaWGphOkwN795bU8XcGtvpSLgFVMNUrhjAcylH~SDDXEGM02HUxUQc7szVAlHRWEXsebxqtHc4tP06CPb~3ELZil5ZQZY9jf2ke84RFY1-Qu0ngA7FZC1aBSi3EIfnByxYzKp6YmvMURZ5XWnJdL-zW2-WPYuwd5hr8cscYKbC1o3P96prF9u94q9VOOXIPUrC6XYaFj9ftzWFQ__",
    },
    {
      name: "МУСТА Т.Бат-Оч",
      image:
        "https://s3-alpha-sig.figma.com/img/3535/aebb/a92d1f352e44b416b8b126a548856e56?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NYbqi-mh3TK~DhSZagh~MlBRtk3~y8Uv8k~ClkQS9PKdM-uMgNJX~TOAbD3LechzqQeYjCCUVUDOFFdw8STO74vZzfsCBSISNhbR9Jc5FOZKAgPmww0HaQhXcOjyrQGfOT5I6RWbjRjCQ-SZh-z5zfAFKULd5Lks14k-PbbRl4bFOFHw~ArwMQDYk-mSDwn8gCVxpLU62n6aUjuFoFnjAAUWHyaAhU3N4ob52nNVL4rIROro96tIpLVoCVJ3aY7BJhd9GdLZ5ThROIR81aJDlFUXMCTaUJYxzVNZEA0FMDgFDTM~mRROY41-h9j9yxKADrQxU5VezxIMam4cMETJBg__",
    },
  ];
</script>

<div class="title">
  <h2>{title}</h2>
  <p>Бүгд</p>
</div>
<div class="scrollable-row">
  {#each data as artist}
    <div class="artist">
      <img src={artist.image} alt={artist.name} />
      <p>{artist.name}</p>
    </div>
  {/each}
</div>
