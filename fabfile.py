from fabric.api import env, local
from fabric.operations import run
from fabric.contrib.project import rsync_project

env.hosts = ['shapaozi']
env.use_ssh_config = True

def upload():
    rsync_project("/root/shapaoziFE/", "./dist/", exclude="static")
    local("qrsync qiniu.json")
