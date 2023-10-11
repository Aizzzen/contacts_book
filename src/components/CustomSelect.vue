<template>
    <div class="select" :class="isLong ? 'isLong' : 'isShort'">
        <div class="select__title" :style="isSelectEmpty ? 'border-color: rgba(235, 87, 87, 1); color: rgba(235, 87, 87, 1);' : ''">
            <span v-if="isLong" class="selected" style="font-weight: 400">{{ category }}</span>
            <span v-else class="selected" style="font-weight: 700">Все</span>
            <div class="select__icon"></div>
        </div>
        <ul v-if="isLong" class="select__options">
            <li @click="changeCategory('Родственник')">Родственник</li>
            <li @click="changeCategory('Коллега')">Коллега</li>
        </ul>
        <ul v-else class="select__options">
            <li @click="sortByCategory('Все')" class="select__options_active">Все</li>
            <li @click="sortByCategory('Родственник')">Родственники</li>
            <li @click="sortByCategory('Коллега')">Коллеги</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'custom-select',
    props: {
        isLong: {
            type: Boolean,
            default: () => {
                return false
            }
        },
        category: {
            type: String,
            default: () => {
                return "Не выбрано"
            }
        },
        isSelectEmpty: {
            type: Boolean,
        }
    },
    methods: {
        changeCategory(name) {
            this.$emit('not-empty', false)
            this.$emit('update-category', name)
        },
        sortByCategory(categoryName) {
            this.$emit('sort-by-category', categoryName)
        }
    },
    mounted() {
        const select = document.querySelectorAll(".select");
        select.forEach((el) => {
            const title = el.querySelector(".select__title");
            const icon = el.querySelector(".select__icon");
            const options = el.querySelector(".select__options");
            const optionsItems = el.querySelectorAll(".select__options li");
            const selected = el.querySelector(".selected");

            title.addEventListener("click", () => {
                title.classList.toggle("clicked");
                icon.classList.toggle("rotate");
                options.classList.toggle("show");
            })

            optionsItems.forEach((item) => {
                item.addEventListener("click", () => {
                    selected.innerText = item.innerText;
                    title.classList.remove("clicked");
                    icon.classList.remove("rotate");
                    options.classList.remove("show");
                    optionsItems.forEach((item) => {
                        item.classList.remove("select__options_active");
                    })
                    item.classList.add("select__options_active");
                })
            })
        })
    }
}
</script>

<style lang="scss">
.select {
  padding-top: 6px;
  padding-bottom: 8px;
  position: relative;
  height: 40px;

  color: #545454;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;

  & * {
    box-sizing: border-box;
  }

  &__title {
    display: flex;
    justify-content: space-between;
    background: #fff;
    cursor: pointer;

    padding: 10px 8px 10px 8px;
    border-radius: 4px;
    border: 1px solid #DDDDDD;
    gap: 8px;
    transition: background .3s;

    &:hover {
      font-weight: 400;
      border: 1px solid #2F80ED;
    }
  }

  &__icon {
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 5px solid #A9A9A9;
    margin-right: 3px;
    margin-top: 9px;
  }

  &__options {
    list-style: none;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 6px 0 #94B5E159;
    position: absolute;
    top: 4em;
    width: 100%;
    font-weight: 400;
    opacity: 0;
    display: none;
    z-index: 1;
    transition: .2s;

    & li {
      display: flex;
      justify-content: space-between;
      cursor: pointer;
      padding: 10px 8px 10px 16px;

      &:hover {
        background: #EAF2FD;
      }
    }

    &_active {
      font-weight: 700;
      &:after {
        content: url("../assets/check-icon.png");
        position: relative;
        top: 50%;
        right: 5%;
      }
    }
  }
}

.clicked {
  border: 1px solid #2F80ED;
}
.rotate {
  transform: rotate(180deg);
}
.show {
  display: block;
  opacity: 1;
}

.isLong {
    width: 408px;
    @media screen and (max-width: 576px) {
        width: 288px !important;
    }
    @media screen and (max-width: 376px) {
        width: 228px !important;
        padding-top: 2px;
    }
}

.isShort {
    width: 235px;
    text-transform: uppercase;

    @media screen and (max-width: 376px) {
        width: 219px;
    }

}

</style>