<template>
    <tr :class="`leaderboard-item ${ highlighted ? 'hl' : '' } rank-${ rank }`">
        <td class="rank">
            <div class="badge">{{ rank }}</div>
        </td>
        <td class="name">{{ name }}</td>
        <td class="points">{{ points }}pts</td>
        <slot/>
    </tr>
</template>

<script>
export default {
    name: 'leaderboard-item',
    props: {
        rank: Number,
        name: String,
        points: Number,
        highlighted: Boolean
    }
}
</script>

<style scoped>
.leaderboard-item {
    background: var(--l-hdr-background);
    --box-shadow-color: transparent;
    box-shadow: -4px 0 var(--box-shadow-color);
}

.leaderboard-item:nth-child(even) {
    background: var(--l-secondary-lightest);
}

.leaderboard-item.hl {
    background: var(--l-secondary-light);
}

.leaderboard-item td.rank {
    padding: .5em .5em;
    width: 3.5em;
    text-align: center;
}

.badge {
    border-radius: 10px;
    line-height: 2.5em;
    height: 2.5em;
    width: 2.5em;
}

.leaderboard-item.rank-1 {
    --box-shadow-color: gold;
}

.leaderboard-item.rank-2 {
     --box-shadow-color: silver;
}

.leaderboard-item.rank-3 {
    --box-shadow-color: #CD7F32;
}

.leaderboard-item td {
    padding: 1.2em .5em;
}
.name {
    max-width: calc(400px - 4em - 6em);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.points {
    width: 6em;
}
</style>
