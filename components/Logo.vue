<template>
  <div class="logo">
    <div class="logo-icon">
      <svg class="svg-standalone-icon" viewBox="194.67701387972897 115 160.64597224054205 123.14394915395286">
        <g>
          <path fill="currentColor"
            d="M346.3478,115h-142.69431c-4.95494,0.00513 -8.97062,4.02025 -8.97648,8.97519v105.19358c0.00586,4.95489 4.02154,8.97001 8.97648,8.97519h142.69431c4.95464,-0.00518 8.97001,-4.02055 8.97519,-8.97519v-105.19358c-0.00518,-4.95466 -4.02055,-8.9699 -8.97519,-8.97519zM350.14086,229.16876c-0.00233,2.09384 -1.69922,3.79072 -3.79306,3.79306h-142.69431c-2.09428,-0.00182 -3.79179,-1.6987 -3.79435,-3.79306v-105.19358c0.00256,-2.09436 1.70008,-3.79124 3.79435,-3.79306h41.43863l17.76485,20.53108c1.70259,1.96973 4.17783,3.1015 6.78133,3.10099h80.50255zM350.14086,138.63206h-80.50255c-1.09887,0 -2.14333,-0.47779 -2.86183,-1.30926l-14.83099,-17.14067h94.40231c2.09384,0.00233 3.79072,1.69922 3.79306,3.79306zM212.29184,126.8168h5.33008v5.18213h-5.33008zM232.4156,126.8168h5.32878v5.18213h-5.32878zM264.25356,215.10784l16.55224,-52.3198l4.94168,1.56345l-16.55197,52.3198zM251.96285,173.19323l-16.51544,16.53617l16.51544,16.53617l3.66636,-3.66117l-12.85945,-12.875l12.85945,-12.875zM298.03974,206.26557l16.51544,-16.53617l-16.51544,-16.53617l-3.66636,3.66117l12.85686,12.875l-12.85686,12.875z">
          </path>
          </path>
        </g>
      </svg>
    </div>
    <div class="logo-title">
      la herrería
    </div>
    <div class="logo-subtitle">
      dev
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogoComponent'
}
</script>

<style scoped>
.logo {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 5px;
}

.logo-icon {
  display: flex;
  justify-content: center;
  justify-items: center;
  width: 100%;
}

.svg-standalone-icon {
  color: var(--main-color);
  width: 60px;
}

.logo-title {
  text-transform: uppercase;
  font-size: large;
  font-weight: lighter;
  padding: 0px 5px;
  display: inline;
  margin: 0px;
}

.logo-subtitle {
  text-align: center;
  /* text-transform: uppercase; */
  font-weight: 600;
  letter-spacing: 10px;
  font-size: x-small;
  display: inline;
  margin-top: -8px;
}
</style>
