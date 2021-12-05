<template>
  <div class="m-4">

    <div class="medico mb-5">
        <div class="c-img foto-medico">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAABmJLR0QA/wD/AP+gvaeTAAAJVElEQVRogdWaeWwc1R3HP29mdmfXx/pIHEhCgDgkhZwkgZQiylGgNNBLJUFKECricimtoKVVVcofnGqLgqBJDwFq6UWjCooIhZZCCVAFShGkQBNBaoMT7Di2We+u9/AeM/Ne/9iNs5fj3dlxpH6llXbem/eb73fe8fv93hvBDGDjxo36GavPeigSS25IZ52QQgiBmLadlA7Nfpmcd1zbP7tmt9+7+ZobXvGK0/RPrxP3//D+7w8Mj98j0TQ37RPxGOnMBLqusXLpie/MWzBr/VVX9RxqlJenQu+5+74XRsOpi2oxq5Q88h/QhIZtW8RiEaR0JuvmdnVkzlzWffHmnp5djXDzTOiP7t3y+NBoYsNUJnO5LJlMGiuXw5F2XbbnzG7LnXfWSUsuv/IbB9zyM9w2LMbPt2696L2+sQ1CVIp0bJtEIkbOyrm2Pxoe9+/ZF94FLHBrw9U8Ksf+geiT1UTmclmi0XBDIg/jvd6hE37zi5/1uG2vu22olBK6Cry+8vRzHrIdAuX1tmURGx9DKeX2ERUIBHzLd7780k/ctHUt1Mn5B6LJ3FKo0pUoorExpJSVVQ0gkcq03XzzjT/esWNHfZMcl0N325Ztp8YncidMVZ+aSOI4dXOZFulMTgSUtcZNW1dCs9K6otrqmsmkiUbDpJIJN2ZrgmVby9y0c7XqapJgeVkmM0E8Hpu81nWNgOmry24ma+E4Rx/utqKlLqMFeOJeAFKpBB1tzXzxojWcsWIhszpaqbYST4dwJMFbe/p5+u+7icSSXtHzRqhSiiXdx3HrtZfR3GQ2ZGt2ZyuXnLuST5/5CR741V/Zs2/QC4re+FEh4DvXfb5hkcVoCpp8+9pLOX52uyf2PBG6Zul8mjwUeRjBgJ+Nl33SE1sNC1VKsfny88HsALOtulttAGtXLMRnuHb3k2hYaFtrEJ/ZlL8QOuje9qzpN5jV3tqwnYaFBkx/WYnnKS5+f+Nrpidz9P8Bx0Tov/fuZ9+HlZsEvf3D7N7bfywoNC50uqDAth22PPIsW3/9t4q6n/72ebY8/BeyOatRGtPCpVA5XuudjpRIqbCsyiDfsh2UUth27VmOLlTNzy6GK6GtgbZHUVORK+1hQzdobjJpDzVX3NnWGiQY8Ne82ARMn/Ip39P18gWXIeD1t1w/cu9d9/15OJz6QsXILSvQdcGW2zZj6JW+8Ac3fRnLdmrykz5D5+zVS7Zu7ukJu+Hs2hPvfOmF7Zs2bnjnxLntJy8/rbsoN1XglG6dBMzqveb3GwQD5e6pEqmJzB8WzJt10zVf/+bDbvk27PRUqnc1Mri7qAQy0UbNlsIwThYdS13vAIIX7mXC6SstEKDVl4dOA0XWcjVci9G4e+k6NYGSmZJCb8PA98Xxq1KNGvEmYJDOvpJr3Q9a44F4HuJlL6x4I9Sx76ko87V4k8kI8WjjRjyMwNX4/jE0o7Ok0MmBlSJ/uuLK6kuia9VnGiaHl7GucL5K+Wa17gdfs9uezSH1b3lBDTwUKkKLnkFZj1VU6H7wheqfs0LdIo5b/o5H9LxPHlWs/0V0X/XhZqfzv2kh7hBdK+70kpfnaZpoX3ghTubhimEMYARBHPWRKZS4zmuRMEP5qGg/pQfbOhdp7y+tUVR9ASBB/REpVok5K345I5xmwmgx1MA/htD9c/G1AE5+ARaAlKAcsLOgnAGx4NwTZ5KHZzv1U0OFyMYhGz8KC7NjplnM6FaKGn17NWZbM2YIjABoRn6OCi3/3wiAGQKzrUWF3z11JrnMaI8mfJ0PtNox8DXlf0dBVDQ9AKyfKS4z1qOjWWuwqW3BeUlj+j3ZuBZgoqn7c3uTE2/NFB9PFqNNm3p+D3Jk+/ZHbn01MTwn7AvtXu8PzvcJsBTISB+mqu4/M/gZaV5MSGiEhWIv2cF201p9gQiFb7jhjiYzyJMIntv24B0PNsKx4R69+uqrAwp1pebzfe2pTOrgoUDXiGME5g8XtpR8AhKhbiytcpbYQmOweRGhgm/t00AZ5glDVnD06WT4X+dsOu9GAZcIyaZGeTYkdGc2svlL27a+C6CbZpM0gvO0Qly7T0mkgqwDhqNxIHAKxZ80KKXob1rMLHHkBaRE3sfmEOJ9PbRu4KTFWwBa5nQufTU22FBw70ros6n4nx63bDumtz9m6+bi8npLKfqkoi+rmLDyrrMrk8N+4s3Je2I7++nKHFE+KBR64SUlZWlQkTMDLa+Zc178XXI89mIifLcbznWturvUx60judaDWd3fWi1EjzmShFJkC9HPB0BXYf9NHxzCn06TeupdHL+fjjffJr5uHU5wLgAHRD6ScJQiXSV6UsAhPdh2iODtTySiV5zWMrRimVhW8wdMdfXoaLb5A6H7S5bRw6SkgrCUkyLzQuVkJmoMjwDQ/H4foTffzj88kt9Ek0BGy/dmXE6fu35oNC/pTc19rR7uNQt9PhW7DSPQVVwWkQ5DtjNVE9LAUEGqNjaWL7SP7NjrBaEfCoVeWP8TNQgF+K/esnZXYugrtfKveegm9MB3i31RXEpsB87W/Vx8+/dAaMTR2YNDsSP5AMl8dPREHJSkeEXSIhEADmr5YZtTilzZboThM6Y83xkmcBfwZC38axbq6Ebo8M1Sgd9RrMfApwPd3ZP3LUHjOWzGCoT7kZyNjkinwSrtfW0sigU4QqABiaJhbwIXd8xiwZ23YdkWu9HYS+kxSEL3LayVf81DVxQlklkpuQADH9CHZEcuzTN2hkEUQeBC9MkjAAsYQCIsC5wyoZEIvZqiMD1LVtt16JwUCKBpAtPv51PodJXFN0n0im8QPRB6BHOUwAQOongZh4/9BsOGzvPYRFCEEMwvMt2HQiig7ERNi0YZKfRSWimsoh49vkrQVl4mj57Elz6r5juL0FLgc6BsKEngo8KQLc67DjpWIQctnX9KN9AK95cvQrEqO4fjrncTXQotHpblsAtkiv2sreukm1sgWLqDP7xqOapwypYqO4Z8A0mySFgvcvIlusExSLzz+M/KZax7/Q3wGZNDuHftSiAv0inTMI7iCWxmI8hQvYfrwTH7WOOVNSvzQzeY/17SCYWILjoZgMQUZ8o2MIxqWCTUIVSp/KGno8DV58ZCEO/s5PBJ+UdrV6E0jRyKlMsPmDud7JirhrViLK2uiWRUJJpUp1fUZdRnI2kVi2TUpTNKok78D+xciLTXDyWXAAAAAElFTkSuQmCC" width="60px" >
            </div>
        <div class="nombre__medico text-center">{{ nombre_medico }}</div>
        <div class="nombre__especialidad text-center">{{ nombre_especialidad }}</div>
        <div class="medico__calificacion text-center">
            <v-rating class="paciente__calificacion"
                :value="promedio_calificacion"
                color="#FFC107"
                background-color="grey darken-1"
                empty-icon="$ratingFull"
                half-increments
                hover
                large
                dense
                size="3px"
                :readonly="true"
            ></v-rating>
        </div>
    </div>

      <div class="card mb-4" v-for="(calificacion, index) in calificaciones" :key="index">
        <div class="card-body">
            <div class="avatar_paciente">
                <div class="avatar">{{ calificacion.paciente.substring(0, 1) }}</div>
                <div class="paciente">
                    <div class="paciente__nombre">{{ calificacion.paciente }}</div>
                    <v-rating class="paciente__calificacion"
                        :value="calificacion.calificacion"
                        color="#FFC107"
                        background-color="grey darken-1"
                        empty-icon="$ratingFull"
                        half-increments
                        hover
                        large
                        dense
                        size="3px"
                        readonly="true"
                    ></v-rating>
                </div>
            </div>
            <p class="comentario">{{ calificacion.comentario }}</p>
            <div class="comentario__fecha d-flex justify-content-end">{{ calificacion.fecha }}</div>
        </div>
      </div>
  </div>
</template>

<script>
import MedicosService from "../services/MedicosService";

export default {
  name: "Calificaciones",
  data() {
    return {
      nombre_medico: "",
      nombre_especialidad: "",
      calificaciones: [],
      promedio_calificacion : 0
    };
  },
  methods: {
    VerCalificaciones(medicoId) {
      MedicosService.VerCalificaciones(medicoId)
        .then((response) => {
          this.calificaciones = this.formatearFecha(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    VerPromedioCalificacion(medicoId){
      MedicosService.VerPromedioCalificacion(medicoId)
        .then(response => {
            this.promedio_calificacion = response.data;
        })
        .catch(e => {
            console.log(e);
        });
    },
    InfoMedico(medicoId){
        MedicosService.InfoMedico(medicoId)
            .then(response => {
                const data = response.data;
                this.nombre_medico = data.nombre_medico;
                this.nombre_especialidad = data.nombre_especialidad;
            })
            .catch(e => {
                console.log(e);
            });
    },
    formatearFecha(calificaciones){
        return calificaciones.map(calificacion => {
            calificacion.fecha = (new Date(calificacion.fecha)).toLocaleDateString();
            return calificacion;
        })
    },
  },
  mounted() {
    const medicoId = this.$route.params.medicoId;
    this.VerCalificaciones(medicoId);
    this.VerPromedioCalificacion(medicoId);
    this.InfoMedico(medicoId);
  },
};
</script>
    
<style>
    .avatar{
        background: #3F51B5;
        width: 50px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 25px;
        color: white;
    }
    .mdi-star, .mdi-star-half-full{
        font-size: 17px !important;
    }
    .avatar_paciente{
        display: flex;
        gap: 1.5rem;
    }
    .paciente__nombre{
        font-size: 15px;
        font-weight: 600;
        color: rgb(92, 92, 92);
    }
    .comentario{
        font-size: 13px;
        color: rgb(87, 87, 87);
        margin-top: 18px;
    }
    .comentario__fecha{
        font-size: 14px;
        color: gray;
    }
    .nombre__medico{
        font-weight: 600;
        font-size: 15px;
    }
    .nombre__especialidad{
        font-size: 13px;
    }
    .foto-medico{
        transform: translateY(0px);
    }
</style>