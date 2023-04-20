<template>
  <section class="container" :style="{ padding: '80px 0 !important' }">
    <div class="title-wrap">
      <h2 class="title">Why you need digital marketing</h2>
      <p class="desc">Sample text. Click to select the Text Element.</p>
    </div>

    <div class="card-wrapper">
      <div class="card">
        <span class="icon">
          <i class="icon-web"></i>
        </span>
        <h4>Seo</h4>
        <p>Sample text. Click to select the Text Element.</p>
      </div>
      <div class="card">
        <span class="icon">
          <i class="icon-tip"></i>
        </span>
        <h4>Development</h4>
        <p>Sample text. Click to select the Text Element.</p>
      </div>
      <div class="card">
        <span class="icon">
          <i class="icon-cog"></i>
        </span>
        <h4>Web design</h4>
        <p>Sample text. Click to select the Text Element.</p>
      </div>
      <div class="card">
        <span class="icon">
          <i class="icon-location"></i>
        </span>
        <h4>Cms</h4>
        <p>Sample text. Click to select the Text Element.</p>
      </div>
      <div class="card">
        <span class="icon">
          <i class="icon-web"></i>
        </span>
        <h4>Maintenance</h4>
        <p>Sample text. Click to select the Text Element.</p>
      </div>
      <div class="card">
        <span class="icon">
          <i class="icon-database"></i>
        </span>
        <h4>Hosting</h4>
        <p>Sample text. Click to select the Text Element.</p>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.title-wrap {
  padding: 40px 0 !important;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;

  p {
    color: var(--text-color);
  }
}
.card-wrapper {
  height: 100%;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  .card {
    flex-basis: 32%;
    flex-grow: 1;
    display: flex;
    align-self: center;
    flex-direction: column;
    gap: 20px;
    background-color: var(--light-color);
    box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.15);
    border-radius: var(--border-radius);
    padding: 20px;
    text-align: center;

    .icon {
      font-size: 24px;
    }

    h4 {
      color: var(--text-color);
      text-transform: uppercase;
      font-size: 1.25rem;
      font-weight: 500;
    }

    p {
      color: var(--text-color);
    }
  }
}

@media (max-width: 600px) {
  .card {
    flex-basis: 100% !important;
  }
}

.icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  color: #fff;

  i {
    font-size: 32px;
  }
}

.card:nth-child(1) {
  .icon {
    background: var(--primary-color);
  }
}
.card:nth-child(2) {
  .icon {
    background: var(--secondary-color);
  }
}
.card:nth-child(3) {
  .icon {
    background: var(--additional-color);
  }
}
.card:nth-child(4) {
  .icon {
    background: var(--success-color);
  }
}
.card:nth-child(4) {
  .icon {
    background: var(--success-color);
  }
}
.card:nth-child(5) {
  .icon {
    background: var(--additional-color);
  }
}
.card:nth-child(6) {
  .icon {
    background: var(--primary-color);
  }
}
</style>
