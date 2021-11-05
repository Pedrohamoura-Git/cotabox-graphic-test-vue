<template>
    <section class="members-data">
        <div class="members-data__about">
            <h1 class="card-title">Data</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
                earum.
            </p>
        </div>
        <MembersTable />
    </section>
</template>
<script>
import MembersTable from '../MembersTable/MembersTable'

export default {
    components: { MembersTable },
}
</script>
<style lang="scss" src="./_membersData.scss" scoped />
