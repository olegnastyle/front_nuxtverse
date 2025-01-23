module.exports = {
    apps: [
        {
            name: "client-dev",
            script: "npm",
            args: "run dev",
            env: {
                NODE_ENV: "development"
            }
        }
    ]
}